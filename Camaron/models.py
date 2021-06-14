from django.db import models
from django.db.models import fields
from django.forms import ModelForm, widgets
from django import forms
from django.core import validators
from django.utils.translation import gettext_lazy as _, pgettext_lazy
from django_countries.fields import CountryField

# Create your models here.


class Carausel(models.Model):
    imagenWeb = models.CharField(max_length=150)
    imagenMov = models.CharField(max_length=150, default="")
    title = models.CharField(max_length=500, default="")
    sub_title = models.CharField(max_length=100, default="")

    SECTION_CHOICES = [
        ('INI', 'inicio'),
        ('NOS', 'nosotros')
    ]
    section = models.CharField(max_length=3, choices=SECTION_CHOICES, default='INI')

    def __str__(self):
        return "Section: " + self.section + " | " + self.title

    class Meta:
        verbose_name = "foto carousel"
        verbose_name_plural = "fotos carousel"


class Producto(models.Model):
    nombre = models.CharField(max_length=150)
    siglas = models.CharField(max_length=30)
    sizes = models.CharField(max_length=100)
    packaging = models.CharField(max_length=100)
    freezing = models.CharField(max_length=50)
    img = models.CharField(max_length=150)

    def __str__(self):
        return 'Producto: ' + self.nombre

    class Meta:
        verbose_name = "producto"
        verbose_name_plural = "productos"


class Marca(models.Model):
    nombre = models.CharField(max_length=150)
    img = models.CharField(max_length=150)
    hoverText = models.CharField(max_length=150)

    def __str__(self):
        return 'Marca: ' + self.nombre

    class Meta:
        verbose_name = "marca"
        verbose_name_plural = "marcas"


class Certificado(models.Model):
    nombre = models.CharField(max_length=150, unique=True)
    img = models.CharField(max_length=150)
    hoverText = models.CharField(max_length=150)
    origin = models.URLField()
    imgCert = models.CharField(max_length=150)
    docCert = models.CharField(max_length=150)

    def __str__(self):
        return 'Certificado: ' + self.nombre

    class Meta:
        verbose_name = "certificado"
        verbose_name_plural = "certificados"


class ArchivoMultimedia(models.Model):
    titulo = models.CharField(max_length=150, unique=True)
    thumbnail = models.CharField(max_length=150)
    filepath = models.CharField(max_length=150)

    def __str__(self):
        return self.titulo

    class Meta:
        verbose_name = "archivo multimedia"
        verbose_name_plural = "archivos multimedia"


class Contacto(models.Model):
    Nombre = models.CharField(max_length=200)
    Email = models.EmailField()
    Telefono = models.CharField(max_length=13)
    Pais = CountryField(blank_label=_('País'))
    Mensaje = models.TextField()

    def __str__(self):
        return self.Nombre+" "+self.Pais

class ContactoForm(ModelForm):
    class Meta:
        model = Contacto
        fields = '__all__'

        widgets = {
            'Email': forms.EmailInput(attrs={'placeholder':_('Email'),}),
            'Nombre': forms.TextInput(attrs={'placeholder':_('Nombre'),}),
            'Telefono': forms.TextInput(attrs={'placeholder':_('Telefono'),}),
            'Mensaje': forms.Textarea(attrs={'placeholder':_('Mensaje'),}),
        }