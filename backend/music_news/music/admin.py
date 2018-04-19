from django.contrib import admin
from music.models import *


@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'genre', 'is_active')

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'date', 'artist', 'is_active')

@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'artist', 'is_active')

@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'artist', 'date', 'is_active')

@admin.register(AlbumSong)
class AlbumSongAdmin(admin.ModelAdmin):
    list_display = ('id', 'number', 'album', 'song', 'is_active')
