# Generated by Django 3.1.5 on 2021-09-01 01:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0011_test_d'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='e',
            field=models.CharField(default=True, max_length=50),
        ),
    ]