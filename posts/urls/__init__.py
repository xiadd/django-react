from django.conf.urls import url
from ..views import PostList, PostDetail

app_name = 'posts'
urlpatterns = [
    url(r'^list/', PostList.as_view(), name='list'),
    url(r'^detail/(?P<pk>[0-9]+)/', PostDetail.as_view(), name='detail')
]