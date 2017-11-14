from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.generic import View
from django.contrib.auth import login, logout, authenticate
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


def user_logout(requset):
    if requset.user.is_authenticated:
        logout(requset)
        return redirect(reverse('user:login'))
    else:
        return redirect(reverse('user:login'))


@method_decorator(csrf_exempt, name='dispatch')
class UserLogin(View):

    def get(self, request):
        return render(request, 'user/login.html')

    def post(self, request):
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        user = authenticate(username=username, password=password)
        print(request.POST)
        if user is not None:
            login(request, user)
            return redirect(reverse('posts:list'))
        else:
            pass


class UserRegister(View):

    def get(self, request):
        return render(request, 'user/register.html')