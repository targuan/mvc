from django.urls import path, re_path

from django.views.generic.base import RedirectView

from . import views

app_name = "collection"

urlpatterns = [
    path('movies', views.MovieListView.as_view(), name="movie_list"),
    path('movies/<int:pk>', views.MovieDetailView.as_view(), name="movie_detail"),
    path('movies/<int:pk>/delete', views.MovieDeleteView.as_view(), name="movie_delete"),
    path('actors', views.ActorListView.as_view(), name="actor_list"),
    path('directors', views.DirectorListView.as_view(), name="director_list"),
    path('stars/<int:pk>', views.StarDetailView.as_view(), name="star_detail"),
    path('genres', views.GenreListView.as_view(), name="genre_list"),
    path('genres/<int:pk>', views.GenreDetailView.as_view(), name="genre_detail"),
    path('countries', views.CountryListView.as_view(), name="country_list"),
    path('countries/<int:pk>', views.CountryDetailView.as_view(), name="country_detail"),
    path('search', views.SearchView.as_view(), name="search"),
    path('search/external', views.SearchExternalView.as_view(), name="search_external"),
    path('preview/external/<int:id>', views.PreviewExternalView.as_view(), name="preview_external"),
    path('import/external/<int:id>', views.ImportExternalView.as_view(), name="import_external"),
    re_path(r'^$', RedirectView.as_view(url='/movies')),
]
