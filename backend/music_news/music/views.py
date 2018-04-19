from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, QueryDict
from django.views.decorators.csrf import csrf_exempt
from music.models import *
from utils import messages


@csrf_exempt
def artist_list(request):
    try:
        if request.method == "GET":
            artists = Artist.objects.filter(is_active=True)
            artists_json = [artist.full() for artist in artists]
            return JsonResponse(artists_json, safe=False)

        elif request.method == "POST":
            try:
                name = request.POST['name']
                description = request.POST['description']
                genre = request.POST['genre']
                photo_url = request.FILES['photo_url']
            except Exception as e:
                return JsonResponse({"message": messages.NOT_ENOUGH_DATA}, 
                    status=400)

            artist = Artist.objects.add_artist(name=name, 
                description=description, genre=genre, photo_url=photo_url)
        
            return JsonResponse(artist.full(), status=201)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def song_list(request):
    try:
        if request.method == "GET":
            songs = Song.objects.filter(is_active=True)
            songs_json = [song.full() for song in songs]
            return JsonResponse(songs_json, safe=False)

        elif request.method == "POST":
            try:
                title = request.POST['title']
                photo_url = request.FILES['photo_url']
                artist_id = request.POST['artist_id']

                try:
                    artist = Artist.objects.get(pk=artist_id, 
                        is_active=True)
                except Exception as e:
                    return JsonResponse({"error": str(e)}, status=404)

            except Exception as e:
                return JsonResponse({"message": messages.NOT_ENOUGH_DATA}, 
                    status=400)

            song = Song.objects.add_song(title=title, photo_url=photo_url, 
                artist=artist)

            return JsonResponse(song.full(), status=201)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def album_list(request):
    try:
        if request.method == "GET":
            albums = Album.objects.filter(is_active=True)
            albums_json = [album.full() for album in albums]
            return JsonResponse(albums_json, safe=False)

        elif request.method == "POST":
            try:
                title = request.POST['title']
                date = request.POST['date']
                photo_url = request.FILES['photo_url']
                artist_id = request.POST['artist_id']

                try:
                    artist = Artist.objects.get(pk=artist_id, 
                        is_active=True)
                except Exception as e:
                    return JsonResponse({"error": str(e)}, status=404)

            except Exception as e:
                return JsonResponse({"message": messages.NOT_ENOUGH_DATA}, 
                    status=400)

            album = Album.objects.add_album(title=title, date=date,
                photo_url=photo_url, artist=artist)

            return JsonResponse(album.full(), status=201)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def news_list(request):
    try:
        if request.method == "GET":
            news = News.objects.filter(is_active=True)
            news_json = [new.full() for new in news]
            return JsonResponse(news_json, safe=False)

        elif request.method == "POST":
            try:
                title = request.POST['title']
                date = request.POST['date']
                content = request.POST['content']
                photo_url = request.FILES['photo_url']
                artist_id = request.POST['artist_id']

                try:
                    artist = Artist.objects.get(pk=artist_id, 
                        is_active=True)
                except Exception as e:
                    return JsonResponse({"error": str(e)}, status=404)

            except Exception as e:
                return JsonResponse({"message": messages.NOT_ENOUGH_DATA}, 
                    status=400)

            news = News.objects.add_news(title=title, date=date, 
                content=content, photo_url=photo_url, artist=artist)

            return JsonResponse(news.full(), status=201)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def news_detail(request, news_id):
    try:
        try:
            news = News.objects.get(pk=news_id, is_active=True)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=404)

        if request.method == "GET":
            return JsonResponse(news.full(), status=200)

        elif request.method == "PUT":
            data = QueryDict(request.body)
    
            news.title = data.get('title', news.title)
            news.date = data.get('date', news.date)
            news.content = data.get('content', news.content)
            news.photo_url = data.get('photo_url', news.photo_url)

            try:
                artist_id = data.get('artist_id')

                try:
                    artist = Artist.objects.get(pk=artist_id, is_active=True)
                except Exception as e:
                    return JsonResponse({"error": str(e)}, status=404)

                news.artist = artist

            except:
                pass

            news.save()

            return JsonResponse(news.full(), status=200)

        elif request.method == "DELETE":
            news.is_active = False
            news.save()

            return JsonResponse(news.full(), status=200)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def artist_detail(request, artist_id):
    try:
        try:
            artist = Artist.objects.get(pk=artist_id, is_active=True)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=404)

        if request.method == "GET":
            return JsonResponse(artist.full(), status=200)

        elif request.method == "PUT":
            data = QueryDict(request.body)
    
            artist.name = data.get('name', artist.name)
            artist.description = data.get('description', artist.description)
            artist.genre = data.get('genre', artist.genre)
            artist.photo_url = data.get('photo_url', artist.photo_url)

            artist.save()

            return JsonResponse(artist.full(), status=200)

        elif request.method == "DELETE":
            artist.is_active = False
            artist.save()

            return JsonResponse(artist.full(), status=200)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def song_detail(request, song_id):
    try:
        try:
            song = Song.objects.get(pk=song_id, is_active=True)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=404)

        if request.method == "GET":
            return JsonResponse(song.full(), status=200)

        elif request.method == "PUT":
            data = QueryDict(request.body)

            song.title = data.get('title', song.title)
            song.photo_url = data.get('photo_url', song.photo_url)

            try:
                artist_id = data.get('artist_id')

                try:
                    artist = Artist.objects.get(pk=artist_id, is_active=True)
                except Exception as e:
                    return JsonResponse({"error": str(e)}, status=404)

                song.artist = artist

            except:
                pass

            song.save()

            return JsonResponse(song.full(), status=200)

        elif request.method == "DELETE":
            song.is_active = False
            song.save()

            return JsonResponse(song.full(), status=200)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def artist_songs(request, artist_id):
    try:
        try:
            artist = Artist.objects.get(pk=artist_id, is_active=True)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=404)

        songs = artist.song_set.all()
        songs_json = [song.full() for song in songs]

        return JsonResponse(songs_json, safe=False)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


def artist_news(request, artist_id):
    try:
        try:
            artist = Artist.objects.get(pk=artist_id, is_active=True)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=404)

        news = artist.news_set.all()
        news_json = [new.full() for new in news]

        return JsonResponse(news_json, safe=False)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def artist_albums(request, artist_id):
    try:
        try:
            artist = Artist.objects.get(pk=artist_id, is_active=True)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=404)

        albums = artist.album_set.all()
        albums_json = [album.full() for album in albums]

        return JsonResponse(albums_json, safe=False)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


@csrf_exempt
def album_detail(request, album_id):
    try:
        try:
            album = Album.objects.get(pk=album_id, is_active=True)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=404)

        if request.method == "GET":
            tracklist = album.albumsong_set.filter(is_active=True
                ).order_by('number')
            album_json = album.full()
            album_json["tracklist"] = [track.short() for track in tracklist]

            return JsonResponse(album_json, status=200)

        elif request.method == "PUT":
            data = QueryDict(request.body)
    
            album.title = data.get('name', album.title)
            album.photo_url = data.get('photo_url', album.photo_url)
            album.date = data.get('date', album.date)
            
            try:
                artist_id = data.get('artist_id')

                try:
                    artist = Artist.objects.get(pk=artist_id, is_active=True)
                except Exception as e:
                    return JsonResponse({"error": str(e)}, status=404)

                album.artist = artist

            except:
                pass

            album.save()

            return JsonResponse(album.full(), status=200)

        elif request.method == "DELETE":
            album.is_active = False
            album.save()

            return JsonResponse(album.full(), status=200)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
