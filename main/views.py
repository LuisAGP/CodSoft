from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import git
import subprocess


@csrf_exempt
def update(request):

    run("cd /home/opi/django_project")
    run("git pull origin master")
    run("service apache2 restart")
    run("cd /home/opi/django_project/.git/objects")
    run("chown -R opi:opi *")

    return JsonResponse({'message':'OK!'})


def run(cmd):
    msg = "Done!"
    try:

        psw = 'L1998luis'
        command = cmd.split()

        cmd1 = subprocess.Popen(['echo',psw], stdout=subprocess.PIPE)
        cmd2 = subprocess.Popen(['sudo','-S'] + command, stdin=cmd1.stdout, stdout=subprocess.PIPE)
    
    except Exception:
        msg = "Failed!"
    
    return msg

    

# Create your views here.
def index(request):
    return render(request, 'index.html', {})