from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Folder(models.Model):
    id_folder = models.AutoField(primary_key=True)
    id_parent_folder = models.IntegerField(null=True, blank=True)
    id_user = models.IntegerField()
    folder_name = models.CharField(max_length=255)
    folder_route = models.TextField(null=True, blank=True)
    favorite = models.BooleanField(default=False)
    create_at = models.DateField(null=True, auto_now_add=True)
    deleted_at = models.DateField(null=True, default=None, blank=True)





def user_folder(instance, filename):

    user = User.objects.get(pk=instance.id_user)
    folder = Folder.objects.filter(pk=instance.id_folder).first()

    if folder:
        url = str(folder.folder_route).replace("./", '') + folder.folder_name
        file_url = url + "/" + filename
    else:
        file_url = filename

    return '/'.join(['storage', str(user.username), file_url])


class File(models.Model):
    id_file = models.AutoField(primary_key=True)
    id_folder = models.IntegerField(null=True, blank=True)
    id_user = models.IntegerField()
    file_route = models.TextField(null=True, blank=True)
    file_extension = models.CharField(max_length=10)
    file_name = models.CharField(max_length=255)
    file = models.FileField(upload_to=user_folder)
    file_url = models.TextField(null=True, blank=True)
    favorite = models.BooleanField(default=False)
    create_at = models.DateField(null=True, auto_now_add=True)
    deleted_at = models.DateField(null=True, default=None, blank=True)


