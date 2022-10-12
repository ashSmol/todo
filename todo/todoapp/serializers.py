from rest_framework.serializers import ModelSerializer, StringRelatedField

from todoapp.models import Project, Todo


class ProjectModelSerializer(ModelSerializer):
    users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):
    project = StringRelatedField(read_only=True)
    user = StringRelatedField(read_only=True)

    class Meta:
        model = Todo
        fields = '__all__'
