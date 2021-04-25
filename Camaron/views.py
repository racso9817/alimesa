from django.shortcuts import render

def home(request):
    template = "home.html"
    return render(request, template)

def inicio(request):
    template = "inicio.html"
    return render(request, template)