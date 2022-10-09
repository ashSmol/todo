from django_filters.rest_framework import FilterSet, CharFilter

from todoapp.models import Project, Todo


class ProjectFilter(FilterSet):
    title = CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['title']


class TodoFilter(FilterSet):

    class Meta:
        model = Todo
        fields = ['project']
