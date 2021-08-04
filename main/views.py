from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import git


@csrf_exempt
def update(request):
    repo = git.Repo('/home/opi/django_project')
    repo.remotes.origin.pull()

    return JsonResponse({'message':'OK!'})

    

# Create your views here.
def index(request):
    return render(request, 'index.html', {})