from django.db import models
from django.db.models.base import Model
from django.utils import timezone

# Create your models here.


class Folder(models.Model):
    id_folder = models.AutoField(primary_key=True)
    id_parent_folder = models.IntegerField(null=True)
    id_user = models.IntegerField()
    folder_name = models.CharField(max_length=255)
    folder_route = models.TextField()
    create_at = models.DateField(null=True, auto_now_add=True)
    deleted_at = models.DateField(null=True, default=None)





def user_folder(instance, filename):
    return '/'.join(['folder_', instance.user.username])


class File(models.Model):
    id_file = models.AutoField(primary_key=True)
    id_folder = models.IntegerField(null=True)
    id_user = models.IntegerField()
    file_extension = models.CharField(max_length=10)
    file_name = models.CharField(max_length=255)
    file = models.FileField(upload_to=user_folder)


