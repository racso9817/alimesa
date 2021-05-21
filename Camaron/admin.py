from django.contrib import admin
import json 
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields
from .models import *

# Register your models here.
admin.site.register(Carausel)
admin.site.register(Producto)
admin.site.register(Marca)
admin.site.register(Certificado)
admin.site.register(ArchivoMultimedia)