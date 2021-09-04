from django.db import models
from django.utils import timezone

# Create your models here.
class Test(models.Model):
    id_test = models.IntegerField()
    text = models.CharField(max_length=255, null=True)
    a = models.CharField(max_length=255, null=True)
    phone = models.CharField(max_length=10, null=True, unique=True)
    email = models.EmailField(null=True)
    age = models.IntegerField(null=True)
    b = models.CharField(max_length=30, null=True)
    c = models.CharField(max_length=30, null=True)
    d = models.CharField(max_length=30, null=True)
    e = models.CharField(max_length=30, null=True)
    f = models.CharField(max_length=30, null=True)