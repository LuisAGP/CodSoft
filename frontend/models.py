from django.db import models
from django.utils import timezone

# Create your models here.
class Test(models.Model):
    id_test = models.IntegerField()
    a = models.CharField(max_length=30, null=True)
    aa = models.CharField(max_length=30, null=True)
    b = models.CharField(max_length=30, null=True)
    bb = models.CharField(max_length=30, null=True)