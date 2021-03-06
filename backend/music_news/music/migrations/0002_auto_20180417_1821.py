# Generated by Django 2.0.4 on 2018-04-17 18:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('photo_url', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Адрес фотографии')),
                ('date', models.DateField(null=True, verbose_name='Дата выхода альбома')),
            ],
            options={
                'verbose_name': 'Альбом',
                'verbose_name_plural': 'Альбомы',
            },
        ),
        migrations.CreateModel(
            name='AlbumSong',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField(null=True, verbose_name='Номер')),
                ('album', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='music.Album', verbose_name='Альбом')),
            ],
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('date', models.DateTimeField(null=True, verbose_name='Дата публикации')),
                ('content', models.CharField(max_length=500, verbose_name='Содержание')),
                ('photo_url', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Адрес фотографии')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
            },
        ),
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('photo_url', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Адрес фотографии')),
            ],
            options={
                'verbose_name': 'Песня',
                'verbose_name_plural': 'Песни',
            },
        ),
        migrations.AlterField(
            model_name='artist',
            name='photo_url',
            field=models.ImageField(blank=True, null=True, upload_to='', verbose_name='Адрес фотографии'),
        ),
        migrations.AddField(
            model_name='song',
            name='artist',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='music.Artist', verbose_name='Артист'),
        ),
        migrations.AddField(
            model_name='news',
            name='artist',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='music.Artist', verbose_name='Артист'),
        ),
        migrations.AddField(
            model_name='albumsong',
            name='song',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='music.Song', verbose_name='Песня'),
        ),
        migrations.AddField(
            model_name='album',
            name='artist',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='music.Artist', verbose_name='Артист'),
        ),
    ]
