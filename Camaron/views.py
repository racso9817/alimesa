from django.shortcuts import render
from .models import *

def inicio(request):
    template = "new_inicio.html"
    #template = "inicio.html"
    fotos = Carausel.objects.all()
    prods = Producto.objects.all()
    cont = 0
    for p in prods:
        cont += 1
        p.sizes = "\n".join(p.sizes.split("|"))
        p.freezing = "\n".join(p.freezing.split("|"))
    certs = Certificado.objects.all()
    context = {
        'fotos': fotos,
        'prods': prods,
        'certs': certs
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