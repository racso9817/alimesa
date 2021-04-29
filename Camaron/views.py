from django.shortcuts import render
from .models import Carausel

def inicio(request):
    template = "inicio.html"
    obj = Carausel.objects.all()
    context = {
        'obj':obj
    }
    return render(request, template, context)

def certificaciones(request):
    template = "certificaciones.html"
    return render(request, template)

def productos(request):
    template = "productos.html"
    return render(request, template)

def acerca(request):
    template = "acerca.html"
    return render(request, template)

def multimedia(request):
    template = "multimedia.html"
    return render(request, template)

def contacto(request):
    template = "contacto.html"
    return render(request, template)