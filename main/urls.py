from django.urls import path
from main.views import *

urlpatterns = [
    path('', index),
    path('gitPull/', update, name="update")
]