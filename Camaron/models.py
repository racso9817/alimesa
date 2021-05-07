from django.db import models

# Create your models here.


class Carausel(models.Model):
    image = models.CharField(max_length=150)
    title = models.CharField(max_length=150)
    sub_title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

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
    nombre = models.CharField(max_length=150)
    img = models.CharField(max_length=150)
    hoverText = models.CharField(max_length=150)
    origin = models.URLField()
    imgCert = models.CharField(max_length=150)

    def __str__(self):
        return 'Certificado: ' + self.nombre

    class Meta:
        verbose_name = "certificado"
        verbose_name_plural = "certificados"
