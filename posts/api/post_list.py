from ..models import Post
from ..serializers import PostSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer