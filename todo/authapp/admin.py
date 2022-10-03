from django.contrib import admin

from authapp.models import User
from todoapp.models import Project, Todo

admin.site.register(User)
admin.site.register(Project)
admin.site.register(Todo)
