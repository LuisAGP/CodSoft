from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import git
import subprocess


@csrf_exempt
def update(request):

    msg = {'msg':'done!'}
    #requests.get('http://localhost:8001/gitPull/')
    command1 = '/home/opi/Desktop/Python/command.sh'.split()
    subprocess.call(command1)
    #git.cmd.Git("/home/opi/django_project").pull()
    
    return JsonResponse(msg)

    

# Create your views here.
def index(request):
    return render(request, 'main.html', {})