# Generated by Django 5.0.6 on 2024-05-28 06:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requirements', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='requirement',
            name='file',
        ),
        migrations.CreateModel(
            name='RequirementFile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='requirements/', verbose_name='Прикрепленный файл')),
                ('requirement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='requirements.requirement')),
            ],
        ),
    ]
