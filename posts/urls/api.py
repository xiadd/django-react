from django.conf.urls import url
from posts.api.post_list import PostList
from posts.api.post_detail import PostDetail

urlpatterns = [
    url(r'^list/', PostList.as_view(), name='list'),
    url(r'^detail/(?P<pk>[0-9]+)/$', PostDetail.as_view(), name='detail')
]