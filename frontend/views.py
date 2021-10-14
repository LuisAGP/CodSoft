from django.core.checks import messages
from django.middleware.csrf import get_token
from django.http.response import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
import json
from django.core import serializers

from frontend.models import Folder

# Function for get csrf token
# @author Luis GP
# @return json
def csrf(request):
    return HttpResponse(json.dumps({'csrftoken': get_token(request)}), content_type="application/json")




# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')




# This function recibes the user information and login to system
# @author Luis GP
# @return JSON
def authentication(request, *args, **kwargs):

    response = {}
    if request.method == "POST":

        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            response = {'status': 200, 'message': 'Now you are logged!', 'logged': True}

        else:
            response = {'status': 200, 'message': 'Wrong user or password!', 'logged': False}

    else:
        response = {'message': 'Wrong user or password!'}


    
    return HttpResponse(json.dumps(response), content_type="application/json")




def user_logout(request):
    logout(request)

    return HttpResponseRedirect(reverse('login_page'))




def islogged(request):
    # Code 0 is not logged
    # Code 1 is logged
    response = {'code': 0, 'message': 'The user is no logged'}
    if request.user is not None:
        response = {'code': 1, 'message': 'The user is logged'}

    return HttpResponse(json.dumps(response), content_type="application/json")




def getFolders(request):

    response = {}
    
    if request.method == "POST" and 'id_folder' in request.POST:

        if request.POST['id_folder'] != "null":
            folders = Folder.objects.filter(id_parent_folder=request.POST['id_folder'], deleted_at=None)
        else:
            folders = Folder.objects.filter(id_parent_folder=None, deleted_at=None)
        
        response = serializers.serialize('json', folders)
    else:
        response = {"status": 200, "message": "Invalid data!"}


    return HttpResponse(response, content_type="application/json")
