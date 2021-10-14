from django.urls import path
from django.views.generic import TemplateView
from .views import *

urlpatterns = [
    path('', index),
    path('login/', index, name='login_page'),
    path('authentication/', authentication, name="auth"),
    path('logout/', user_logout, name="user_logout"),
    path('islogged/', islogged, name="islogged"),
    path('getCSRFToken/', csrf, name="csrf"),
    path('getFolders/', getFolders)
]