# Generated by Django 3.2 on 2021-05-13 04:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Camaron', '0005_auto_20210507_1050'),
    ]

    operations = [
        migrations.AddField(
            model_name='carausel',
            name='section',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
    ]
