from django.db import models
from django.db.models.fields import IntegerField

# Create your models here.
class Test(models.Model):
    id_test = models.IntegerField()
    text = models.CharField(max_length=255, null=True)
    a = models.CharField(max_length=255, null=True)