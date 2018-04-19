from django.db import models
from django.conf import settings
from utils.constants import GENRE_TYPES


class ArtistManager(models.Manager):
    """
    Manager for Artist Model
    """
    def add_artist(self, name, description, genre, photo_url):
        obj = Artist(name=name, description=description, genre=genre,
                        photo_url=photo_url)
        obj.save()
        return obj

     
class Artist(models.Model):
    """
    Model for Artist
    """
    name = models.CharField(max_length=255, blank=False,
                                    verbose_name=u"Имя артиста",
                                    null=True)
    description = models.CharField(max_length=5000, blank=True,
                                    verbose_name=u"Описание",
                                    null=True)
    genre = models.SmallIntegerField(choices=GENRE_TYPES, 
                                    blank=False, verbose_name=u"Жанр",
                                    null=True)
    photo_url = models.ImageField(blank=True, null=True,
                                    verbose_name=u"Адрес фотографии")
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    def full(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'genre': self.genre,
            'photo_url': self.photo_url.url,
            'is_active': self.is_active,
        }

    def short(self):
        return {
            'id': self.id,
            'name': self.name,
            'photo_url': self.photo_url.url,
            'is_active': self.is_active,
        }

    objects = ArtistManager()

    class Meta:
        verbose_name = u'Артист'
        verbose_name_plural = u'Артисты'


class NewsManager(models.Manager):
    """
    Manager for News Model
    """
    def add_news(self, title, date, content, artist, photo_url):
        obj = News(title=title, date=date, content=content, artist=artist,
            photo_url=photo_url)
        obj.save()
        return obj


class News(models.Model):
    """
    Model for Music News
    """
    title = models.CharField(max_length=255, blank=False,
                                    verbose_name=u"Название")
    date = models.DateTimeField(verbose_name=u"Дата публикации",
                                    null=True)
    content = models.CharField(max_length=500, blank=False,
                                    verbose_name=u"Содержание")
    artist = models.ForeignKey(settings.ARTIST_MODEL, verbose_name=u"Артист",
                                    null=True, on_delete=models.CASCADE)
    photo_url = models.ImageField(blank=True, null=True,
                                    verbose_name=u"Адрес фотографии")
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    def full(self):
        return {
            'id': self.id,
            'title': self.title,
            'date': str(self.date),
            'content': self.content,
            'artist': self.artist.short(),
            'photo_url': self.photo_url.url,
            'is_active': self.is_active,
        }

    objects = NewsManager()

    class Meta:
        verbose_name = u"Новость"
        verbose_name_plural = u"Новости"


class SongManager(models.Manager):
    """
    Manager for Song Model
    """
    def add_song(self, title, photo_url, artist):
        obj = Song(title=title, artist=artist, photo_url=photo_url)
        obj.save()
        return obj


class Song(models.Model):
    """
    Model for Song
    """
    title = models.CharField(max_length=255, blank=False,
                                    verbose_name=u"Название")
    photo_url = models.ImageField(blank=True, null=True,
                                    verbose_name=u"Адрес фотографии")
    artist = models.ForeignKey(settings.ARTIST_MODEL, verbose_name=u"Артист",
                                    null=True, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title + ' - ' + self.artist.name

    def full(self):
        return {
            'id': self.id,
            'title': self.title,
            'photo_url': self.photo_url.url,
            'artist': self.artist.short(),
            'is_active': self.is_active,
        }

    def short(self):
        return {
            'id': self.id,
            'title': self.title,
            'photo_url': self.photo_url.url,
            'is_active': self.is_active,
        }

    objects = SongManager()

    class Meta:
        verbose_name = u"Песня"
        verbose_name_plural = u"Песни"


class AlbumManager(models.Manager):
    """
    Manager for Album Model
    """
    def add_album(self, title, date, artist, photo_url):
        obj = Album(title=title, date=date, artist=artist, photo_url=photo_url)
        obj.save()
        return obj


class Album(models.Model):
    """
    Model for Album
    """
    title = models.CharField(max_length=255, blank=False,
                                    verbose_name=u"Название")
    photo_url = models.ImageField(blank=True, null=True,
                                    verbose_name=u"Адрес фотографии")
    artist = models.ForeignKey(settings.ARTIST_MODEL, verbose_name=u"Артист",
                                    null=True, on_delete=models.CASCADE)
    date = models.DateField(verbose_name=u"Дата выхода альбома",
                                    null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    def full(self):
        return {
            'id': self.id,
            'title': self.title,
            'photo_url': self.photo_url.url,
            'artist': self.artist.short(),
            'date': str(self.date),
            'is_active': self.is_active
        }

    objects = AlbumManager()

    class Meta:
        verbose_name = u"Альбом"
        verbose_name_plural = u"Альбомы"


class AlbumSongManager(models.Manager):
    """
    Manager for AlbumSong Model
    """
    def add_albumsong(self, number, album, song, artist):
        obj = AlbumSong(number=number, album=album, song=song, artist=artist)
        obj.save()
        return obj


class AlbumSong(models.Model):
    """
    Model for Album/Song(Tracklist)
    """
    number = models.IntegerField(null=True, verbose_name=u"Номер")
    album = models.ForeignKey(settings.ALBUM_MODEL, verbose_name=u"Альбом",
                                    null=True, on_delete=models.CASCADE)
    song = models.ForeignKey(settings.SONG_MODEL, verbose_name=u"Песня",
                                    null=True, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.album.title + " - " + self.song.title

    def full(self):
        return {
            'id': self.id,
            'number': self.number,
            'album': self.album.full(),
            'song': self.song.full(),
            'is_active': self.is_active
        }

    def short(self):
        return {
            'id': self.id,
            'number': self.number,
            'song': self.song.short(),
            'is_active': self.is_active,
        }

    objects = AlbumSongManager()

    class Meta:
        verbose_name = u"Альбом/Песня"
        verbose_name_plural = u"Альбомы/Песни"
