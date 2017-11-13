from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True, allow_blank=False)
    intro = serializers.CharField(required=True, allow_blank=False)
    content = serializers.CharField(required=True, allow_blank=False)