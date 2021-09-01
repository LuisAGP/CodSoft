from django.db import DefaultConnectionProxy, models
from django.db.models.fields import IntegerField
from django.utils import timezone

# Create your models here.
class Test(models.Model):
    id_test = models.IntegerField()
    text = models.CharField(max_length=255, null=True)
    a = models.CharField(max_length=255, null=True)
    b = models.IntegerField(null=True)
    c = models.BooleanField(default=True, null=True)
    d = models.IntegerField(default=5)
    e = models.CharField(max_length=50, default=True)
<<<<<<< HEAD
    f = models.DateField(default=timezone.now)
=======
    f = models.DateField(default=timezone.now, null=True)
    g = models.IntegerField(null=True, default=2)
>>>>>>> 12ac2fb90a6d735b0e0c06dde92270727a69fecf
