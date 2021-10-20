from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('login/', index, name='login_page'),
    path('authentication/', authentication, name="auth"),
    path('logout/', user_logout, name="user_logout"),
    path('islogged/', islogged, name="islogged"),
    path('getCSRFToken/', csrf, name="csrf"),
    path('getDirectory/', getDirectory),
    path('createNewFolder/', createNewFolder),
    path('uploadFiles/', uploadFiles)
]