from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls.i18n import i18n_patterns
from Camaron.views import *

urlpatterns = i18n_patterns(
    path('admin/', admin.site.urls),

    path('inicio/', inicio, name='inicio'),

    path('certificaciones/', certificaciones, name='certificaciones'),

    path('productos/', productos, name='productos'),

    path('productos/<str:siglas>', productoPorSiglas, name='vistaProductoPorSiglas'),

    path('acerca/', acerca, name='acerca'),

    path('multimedia/', multimedia, name='multimedia'),

    path('contacto/', contacto, name='contacto'),

    path('', principal, name='principal'),

 ) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


