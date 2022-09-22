from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .serializers import UserModelSerializer
# Create your views here.
from authapp.models import User


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
