from django.conf.urls import url
from .. import views

app_name = 'user'
urlpatterns = [
    url(r'^logout/', views.user_logout, name='logout'),
    url(r'^login/', views.UserLogin.as_view(), name='login'),
    url(r'^register/', views.UserRegister.as_view(), name='register')
]