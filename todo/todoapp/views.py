from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .serializers import ProjectModelSerializer, TodoModelSerializer
from todoapp.models import Project, Todo


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_fields = ['title']
    # pagination_class =ProjectLimitOffsetPagination


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    filterset_fields = ['project']
    # pagination_class = TodoLimitOffsetPagination

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_closed = True
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
