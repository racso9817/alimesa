# Generated by Django 3.1.6 on 2021-06-20 02:34

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Camaron', '0020_auto_20210617_1658'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='idProducto',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
    ]
