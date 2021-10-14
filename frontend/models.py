from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Test(models.Model):
    id_test = models.IntegerField()
    a = models.CharField(max_length=30, null=True)
    aa = models.CharField(max_length=30, null=True)
    b = models.CharField(max_length=30, null=True)
    bb = models.CharField(max_length=30, null=True)
    c = models.CharField(max_length=30, null=True)
    field = models.CharField(max_length=30, null=True)
    field2 = models.CharField(max_length=30, null=True)
    field3 = models.CharField(max_length=30, null=True)
    field4 = models.CharField(max_length=40, null=True)
    field5 = models.CharField(max_length=30, null=True)



class Folder(models.Model):
    id_folder = models.AutoField(primary_key=True)
    id_parent_folder = models.IntegerField(null=True, blank=True)
    id_user = models.IntegerField()
    folder_name = models.CharField(max_length=255)
    folder_route = models.TextField(null=True, blank=True)
    create_at = models.DateField(null=True, auto_now_add=True)
    deleted_at = models.DateField(null=True, default=None, blank=True)





def user_folder(instance, filename):

    user = User.objects.get(pk=instance.id_user)
    folder = Folder.objects.get(pk=instance.id_folder)

    if folder:
        file_url = str(folder.folder_route) + "/" + filename
    else:
        file_url = filename

    return '/'.join(['storage', str(user.username), file_url])


class File(models.Model):
    id_file = models.AutoField(primary_key=True)
    id_folder = models.IntegerField(null=True, blank=True)
    id_user = models.IntegerField()
    file_extension = models.CharField(max_length=10)
    file_name = models.CharField(max_length=255)
    file = models.FileField(upload_to=user_folder)


