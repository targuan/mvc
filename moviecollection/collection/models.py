from django.db import models


class Bundle(models.Model):
    barcode = models.CharField(max_length=20)
    label = models.CharField(max_length=100)

    class Meta:
        ordering = ['label']

class Country(models.Model):
    label = models.CharField(max_length=100)

    def __str__(self):
        return self.label

    class Meta:
        ordering = ['label']

class Dvd(models.Model):
    barcode = models.CharField(max_length=20)
    bundle = models.ForeignKey('Bundle',
                               on_delete=models.CASCADE,
                               related_name="dvds",
                               null=True)
    movies = models.ManyToManyField('Movie', related_name='dvds')

class Genre(models.Model):
    label = models.CharField(max_length=100)

    def __str__(self):
        return self.label

    class Meta:
        ordering = ['label']

class Person(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Movie(models.Model):
    title = models.CharField(max_length=100)
    vo_title = models.CharField(max_length=100, null=True)
    year = models.IntegerField(null=True)
    description = models.TextField(null=True)
    genres = models.ManyToManyField('Genre', related_name="movies")
    countries = models.ManyToManyField('Country', related_name="movies")
    directors = models.ManyToManyField('Person', related_name="direct")
    actors = models.ManyToManyField('Person', related_name='play_in')
    sort_key = models.CharField(max_length=100)

    class Meta:
        ordering = ['sort_key']

    def update_sort_key(self):
        self.sort_key = self.title.lower()