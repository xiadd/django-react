from django.shortcuts import render
from django.views.generic import ListView

from rest_framework.serializers import Serializer

from .models import Post


class PostList(ListView):
    pass
