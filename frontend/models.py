from django.db import models
from django.utils import timezone

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