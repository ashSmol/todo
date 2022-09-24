from django.core.management.base import BaseCommand
from authapp.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.all().delete()
        users = [
            {'username': 'superuser_username', 'first_name': 'superuser_first_name', 'last_name': 'superuser_last_name',
             'email': 'email@example.com'},
            {'username': 'user1_username', 'first_name': 'user1_first_name', 'last_name': 'user1_last_name',
             'email': 'email_user1@example.com'},
            {'username': 'user2_username', 'first_name': 'user2_first_name', 'last_name': 'user2_last_name',
             'email': 'email_user2@example.com'},
        ]
        for user_data in users:
            user = User(**user_data)
            user.save()

        User.objects.create_superuser('admin', 'admin@example.com', '12345')
