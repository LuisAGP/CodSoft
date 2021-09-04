from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import subprocess


@csrf_exempt
def update(request):

    msg = {'msg':'done!'}
    
    requests.get('http://localhost:8001/gitPull/')
    
    subprocess.Popen("python3 /home/opi/django_project/manage.py makemigrations".split())
    subprocess.Popen("python3 /home/opi/django_project/manage.py migrate".split())

    return JsonResponse(msg)

    

# Create your views here.
def index(request):
    return render(request, 'main.html', {})