from django.db import models
from django.db.models.fields import IntegerField

# Create your models here.
class Test(models.Model):
    id_test = models.IntegerField()