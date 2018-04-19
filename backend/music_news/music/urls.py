from django.urls import path, re_path
from . import views


urlpatterns = [
    path('artists/', views.artist_list),
    path('artists/<int:artist_id>/', views.artist_detail),
    path('artists/<int:artist_id>/songs/', views.artist_songs),
    path('artists/<int:artist_id>/albums/', views.artist_albums),
    path('artists/<int:artist_id>/news/', views.artist_news),
    path('news/', views.news_list),
    path('news/<int:news_id>/', views.news_detail),
    path('albums/', views.album_list),
    path('albums/<int:album_id>/', views.album_detail),
    path('songs/', views.song_list),
    path('songs/<int:song_id>/', views.song_detail),
    # re_path(r'^todos/(?P<task_id>[0-9]+)/$', views.todo_detail),
]