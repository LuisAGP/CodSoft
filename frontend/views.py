from django.core.checks import messages
from django.db.models.query_utils import PathInfo
from django.http import response
from django.middleware.csrf import get_token
from django.http.response import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
import json
from django.core import serializers

from frontend.models import *

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
    
    if request.method == "POST" and 'route' in request.POST:

        if request.POST['route'] != "null":
            folders = Folder.objects.filter(folder_route=request.POST['route'], deleted_at=None)
        else:
            folders = Folder.objects.filter(folder_route='./', deleted_at=None)
        
        response = serializers.serialize('json', folders)
    else:
        response = {"status": 200, "message": "Invalid data!"}


    return HttpResponse(response, content_type="application/json")





def uploadFiles(request):
    response = {}

    try:
        if request.user is not None:
            for index, filename in request.FILES.items():
                file = request.FILES[index]
                f = File()

                f.id_folder = request.POST['id_folder']
                f.id_user = request.user.id
                f.file_extension = str(filename).split('.')[-1]
                f.file_name = filename
                f.file = file

                f.save()

        
        response = {'status': 200, 'message': 'Files has been uploaded!'}
    except:
        response = {'status': 500, 'message': 'Cannot upload files!'}


    return HttpResponse(json.dumps(response), content_type="application/json")