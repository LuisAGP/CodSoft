from django.http.response import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
import json

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')





def authentication(request, *args, **kwargs):

    response = {}
    if request.method == "POST":

        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)

        if user is not None:
            login(request, user)
            response = {'status': 200, 'message': 'Now you are logged!'}

        else:
            response = {'status': 200, 'message': 'Wrong user or password!'}

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