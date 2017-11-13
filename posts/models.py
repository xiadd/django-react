from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    intro = models.TextField(max_length=300)
    content = models.TextField(max_length=20000)
    author = models.ForeignKey(User)

    def __str__(self):
        return self.title