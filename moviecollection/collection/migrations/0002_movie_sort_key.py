# Generated by Django 2.0.2 on 2018-03-04 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collection', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='sort_key',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
    ]
