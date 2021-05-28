from django.shortcuts import redirect, render
from django.http import Http404
from django.core.mail import send_mail
from django.conf import settings
from .models import *

def inicio(request):
    template = "inicio.html"
    # Cambiar a filter el all de fotos cuando se agregue la seccion a carousel
    fotos = Carausel.objects.filter(section="INI")
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
    certs = Certificado.objects.all()
    for c in certs:
        c.className = c.nombre.replace(" ","-")
    context = {
        'certs': certs
    }
    return render(request, template, context)

def productos(request):
    template = "productos.html"
    prods = Producto.objects.all()
    cont = -1
    pad = 0
    for p in prods:
        p.cont = max(cont, 0)
        p.pad = int(pad > 0)
        p.sizes = "\n".join(p.sizes.split("|"))
        p.freezing = "\n".join(p.freezing.split("|"))
        p.packaging = "\n".join(p.packaging.split("|"))
        cont += 1
        pad += 1
    marcas = Marca.objects.all()
    context = {
        'prods': prods,
        'marcas': marcas,
        'cont': cont,
    }
    return render(request, template, context)

def productoPorSiglas(request, siglas=""):
    template = "productoPorSiglas.html"
    products = Producto.objects.all()
    try:
        p = products.get(siglas=siglas.upper())
        p.sizes = "\n".join(p.sizes.split("|"))
        p.freezing = "\n".join(p.freezing.split("|"))
        p.packaging = "\n".join(p.packaging.split("|"))
    except Exception as e:
        print(e)
        raise Http404

    context = {
        'prod': p,
        'sizes': p.sizes,
        'freezing': p.freezing,
        'packaging': p.packaging,
    }
    return render(request, template, context)

def acerca(request):
    template = "acerca.html"
    fotos = Carausel.objects.filter(section="NOS")
    context = {
        'fotos': fotos,
    }
    return render(request, template, context)

def multimedia(request):
    template = "multimedia.html"
    documents = ArchivoMultimedia.objects.all()
    context = {
        'documents': documents
    }
    return render(request, template, context)

def contacto(request):
    template = "contacto.html"
    if request.method == 'POST':
        form = ContactoForm(request.POST)
        message = request.POST['Mensaje']
        sender = request.POST['Email']
        cel = request.POST['Telefono']
        pais = request.POST['Pais']
        nombre = request.POST['Nombre']
        if form.is_valid:
            send_mail(
                'Mensaje de '+nombre,
                message+'\n'+'Telefono: '+cel+'\n'+'Pais: '+pais+'\n'+'De: '+sender,
                sender, 
                ['oscaravilaa9817@gmail.com'], 
                fail_silently=False)
            form.save()
            form.clean()
            return redirect('contacto')
    else:
        form = ContactoForm()
    context = {
        'form':form,
    }
    return render(request, template, context)

def principal(request):
    template = 'principal.html'
    return render(request, template)