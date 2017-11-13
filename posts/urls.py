from django.conf.urls import url
# from .views import PostList
from .api.post_list import PostList
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^$', PostList.as_view(), name='list')
]