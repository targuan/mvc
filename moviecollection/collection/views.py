from django.views.generic.list import ListView
from django.views.generic import DetailView
from django.views.generic.base import TemplateView, RedirectView
from django.db.models import Count, Q
from django.http import Http404
from django.conf import settings
import os

from .models import Movie, Person, Genre, Country, Dvd
from .utils import DvdFR

class MovieListView(ListView):
    model = Movie
    ordering = 'sort_key'

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.prefetch_related("genres").prefetch_related("directors")

class MovieDetailView(DetailView):
    model = Movie

class MovieDeleteView(RedirectView):
    permanent = False
    pattern_name = "collection:movie_list"
    def get_redirect_url(self, *args, **kwargs):
        print(kwargs)
        if kwargs.get('pk') is None:
            raise Http404()
        
        Movie.objects.filter(pk=kwargs.get('pk')).delete()

        return super().get_redirect_url()


class StarListView(ListView):
    model = Person
    ordering = 'name'
    count_field = None

    def get_queryset(self):
        qs = super().get_queryset()
        if self.count_field is not None:
            qs = qs.annotate(field_count=Count(self.count_field)).filter(field_count__gt=0)
        
        return qs

class ActorListView(StarListView):
    count_field = "play_in"


class DirectorListView(StarListView):
    count_field = "direct"

class StarDetailView(DetailView):
    model = Person

class GenreListView(ListView):
    model = Genre
    ordering = 'label'

class GenreDetailView(DetailView):
    model = Genre

class CountryListView(ListView):
    model = Country
    ordering = 'label'

class CountryDetailView(DetailView):
    model = Country

class SearchView(TemplateView):
    template_name = "collection/search.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        search_string = self.request.GET.get('search')
        if search_string is None or len(search_string) < 1:
            raise Http404()

        
        context['search'] = search_string
        movie_q = Q(title__icontains=search_string) | Q(dvds__barcode=search_string)
        context['movies'] = Movie.objects.filter(movie_q).all()

        return context

class SearchExternalView(TemplateView):
    template_name = "collection/search_external.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        search_string = self.request.GET.get('search')
        if search_string is None or len(search_string) < 1:
            raise Http404()

        context['search'] = search_string
        context['movies'] = DvdFR.search(search_string)

        return context
    

class PreviewExternalView(TemplateView):
    template_name = "collection/preview_external.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if kwargs.get('id') is None:
            raise Http404()
        
        context['movie'] = DvdFR.get(kwargs.get('id'))

        context['existing'] = Movie.objects.filter(title__iexact=context['movie']['title']).prefetch_related("directors")

        return context

class ImportExternalView(RedirectView):
    permanent = False
    pattern_name = "collection:movie_detail"
    def get_redirect_url(self, *args, **kwargs):
        if kwargs.get('id') is None:
            raise Http404()

        external_movie = DvdFR.get(kwargs.get('id'))

        directors = []
        for director in external_movie.get("directors", []):
            directors.append(Person.objects.get_or_create(name=director)[0])
        actors = []
        for actor in external_movie.get("actors", []):
            actors.append(Person.objects.get_or_create(name=actor)[0])
        genres = []
        for genre in external_movie.get("genres", []):
            genres.append(Genre.objects.get_or_create(label=genre)[0])
        countries = []
        for country in external_movie.get("countries", []):
            countries.append(Country.objects.get_or_create(label=country)[0])

        
        movie = Movie.objects.create(
            title=external_movie['title'],
            vo_title=external_movie['vo_title'],
            year=external_movie['year'],
            description=external_movie['description']
        )
        movie.update_sort_key()
        movie.actors.set(actors)
        movie.directors.set(directors)
        movie.genres.set(genres)
        movie.countries.set(countries)
        movie.save()


        dvd = Dvd.objects.create(barcode=external_movie['barcode'])
        dvd.movies.add(movie)
        dvd.save()

        DvdFR.download_cover(external_movie['cover'], os.path.join(settings.STATIC_ROOT, 'covers', "{}.jpg".format(movie.id)))
        #article = get_object_or_404(Article, pk=kwargs['pk'])
        #article.update_counter()
        return super().get_redirect_url(pk=movie.id)