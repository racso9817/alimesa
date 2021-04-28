from django.shortcuts import render

def inicio(request):
    template = "inicio.html"
    return render(request, template)