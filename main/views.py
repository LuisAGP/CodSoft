from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests


@csrf_exempt
def update(request):

    msg = {'msg':'done!'}
    
    requests.get('http://localhost:8001/gitPull/')
    

    return JsonResponse(msg)

    

# Create your views here.
def index(request):
    return render(request, 'index.html', {})