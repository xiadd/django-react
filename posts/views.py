from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Post


class PostList(ListView):
    template_name = 'post/list.html'
    model = Post
    context_object_name = 'posts'
    paginate_by = 10


class PostDetail(DetailView):
    template_name = 'post/detail.html'
    model = Post
    context_object_name = 'post'
