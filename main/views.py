from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import subprocess


@csrf_exempt
def update(request):

    msg = {'msg':'done!'}
    
    requests.get('http://localhost:8001/gitPull/')
    command1 = '/home/opi/Desktop/Python/command.sh'.split()
    cmd1 = subprocess.call(command1)

    return JsonResponse(msg)

    

# Create your views here.
def index(request):
    return render(request, 'main.html', {})