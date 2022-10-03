from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField, StringRelatedField

from authapp.serializers import UserModelSerializer
from todoapp.models import Project, Todo


class ProjectModelSerializer(ModelSerializer):
    users = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):
    project = PrimaryKeyRelatedField(read_only=True)
    user = StringRelatedField(read_only=True)

    class Meta:
        model = Todo
        fields = '__all__'
