from django.http import HttpResponseRedirect
from django.urls import reverse


class AuthRequiredMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        # Here I call login if not authenticated and request is not login page
        if not request.user.is_authenticated and request.path != reverse('login_page') and request.path != reverse('auth') and request.path != reverse('gitpull'):
            return HttpResponseRedirect(reverse('login_page'))
        
        response = self.get_response(request)
        return response
