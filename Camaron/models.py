from django.db import models
from django.db.models import fields
from django.forms import ModelForm, widgets
from django import forms
from django.core import validators
from django_countries.fields import CountryField

# Create your models here.


class Carausel(models.Model):
    image = models.CharField(max_length=150)
    title = models.CharField(max_length=500)
    sub_title = models.CharField(max_length=100)
    section = models.CharField(max_length=100)

    def __str__(self):
        return "Section: " + self.title

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
    Telefono = models.CharField(max_length=12)
    Pais = CountryField()
    Mensaje = models.TextField()

    def __str__(self):
        return self.Nombre+" "+self.Pais

class ContactoForm(ModelForm):
    class Meta:
        model = Contacto
        Telefono = forms.CharField(label="Telefono", max_length=12, validators=[validators.RegexValidator(r'\d\d\d\d\d\d\d\d\d\d|\d\d\d\d\d\d\d\d\d\d\d\d|\d\d\d\d\d\d\d|\d\d\d\d\d\d\d\d\d\d\d', ('Ingrese un telefono válido.'), 'invalid'),])
        fields = '__all__'
