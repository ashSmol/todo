from django.db import models
from authapp.models import User


class Project(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    repository_link = models.CharField(max_length=255, blank=False, null=False)
    users = models.ManyToManyField(User)


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField(null=False, blank=False)
    creation_date_time = models.DateTimeField(auto_now_add=True)
    last_modified_date_time = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_closed = models.BooleanField(default=False)
