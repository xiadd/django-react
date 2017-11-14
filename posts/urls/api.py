from django.conf.urls import url
# from .views import PostList
from posts.api.post_list import PostList

urlpatterns = [
    url(r'^list/', PostList.as_view(), name='list')
]