from django.db import models

# Create your models here.

class Carausel(models.Model):
    objects = models.Manager()
    image = models.ImageField(upload_to = 'pics/%y/%m/')
    title = models.CharField(max_length=150)
    sub_title = models.CharField(max_length=100)

    def str_(self):
        return self.title
