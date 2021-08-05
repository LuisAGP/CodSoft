from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import git
import subprocess


@csrf_exempt
def update(request):

    msg = {'msg':'done!'}

    psw = 'L1998luis'
    command1 = 'service apache2 restart'.split()
    command2 = 'sudo chmod -R 775 /home/opi/django_project'.split()

    cmd1 = subprocess.Popen(['echo',psw], stdout=subprocess.PIPE)
    cmd2 = subprocess.Popen(['sudo','-S'] + command2, stdin=cmd1.stdout, stdout=subprocess.PIPE)

    subprocess.call('git pull origin master', shell=True, cwd="/home/opi/django_project")

    cmd2 = subprocess.Popen(['sudo','-S'] + command1, stdin=cmd1.stdout, stdout=subprocess.PIPE)
    cmd2 = subprocess.Popen(['sudo','-S'] + command2, stdin=cmd1.stdout, stdout=subprocess.PIPE)

    return JsonResponse(msg)

    

# Create your views here.
def index(request):
    return render(request, 'index.html', {})