from django.db import models
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
    f = models.DateField(default=timezone.now, null=True)
    g = models.IntegerField(null=True, default=2)
    h = models.EmailField(null=True)
    i = models.IntegerField(default=1, null=True)
    j = models.CharField(max_length=50, null=True)
    k = models.CharField(max_length=10, default='Testing...', null=True)
    l = models.CharField(max_length=50, null=True)
