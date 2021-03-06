# Generated by Django 2.0.4 on 2018-04-17 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0002_auto_20180417_1821'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='albumsong',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='artist',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='news',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='song',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
