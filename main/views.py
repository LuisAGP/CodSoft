from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import git
import subprocess


@csrf_exempt
def update(request):

    msg = {'msg':'done!'}

    subprocess.call('python3 test.py', shell=True, cwd="/home/opi/Desktop/Python")


    return JsonResponse(msg)

    

# Create your views here.
def index(request):
    return render(request, 'index.html', {})