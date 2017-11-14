from django.shortcuts import render
from django.views.generic import ListView

from rest_framework.serializers import Serializer

from .models import Post


class PostList(ListView):
    template_name = 'post/list.html'
    model = Post
    context_object_name = 'posts'
    paginate_by = 5
