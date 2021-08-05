from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import git
import subprocess


@csrf_exempt
def update(request):

    msg = {}

    repo = git.Repo('/home/opi/django_project')
    repo.remotes.origin.pull()
    msg['msg2'] = run("service apache2 restart")
    msg['msg3'] = run("chown -R opi:opi /home/opi/django_project/.git/objects")

    return JsonResponse(msg)


def run(cmd):
    msg = "Done!"
    try:

        psw = 'L1998luis'
        command = cmd.split()

        cmd1 = subprocess.Popen(['echo',psw], stdout=subprocess.PIPE)
        cmd2 = subprocess.Popen(['sudo','-S'] + command, stdin=cmd1.stdout, stdout=subprocess.PIPE)
        
        cmd2.stdout.read().decode()
    except Exception:
        msg = "Failed!"
    
    return msg

    

# Create your views here.
def index(request):
    return render(request, 'index.html', {})