from django.contrib import admin
from .models import Test, Folder, File

# Register your models here.
admin.site.register(Test)
admin.site.register(Folder)
admin.site.register(File)