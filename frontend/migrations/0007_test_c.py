# Generated by Django 3.1.5 on 2021-08-31 05:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0006_auto_20210830_2359'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='c',
            field=models.BooleanField(default=True, null=True),
        ),
    ]
