from django.db import models

class Requirement(models.Model):
    title = models.CharField(max_length=200, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")

    def __str__(self):
        return self.title

class RequirementFile(models.Model):
    requirement = models.ForeignKey(Requirement, related_name='files', on_delete=models.CASCADE)
    file = models.FileField(upload_to='requirements/', verbose_name="Прикрепленный файл")
    name = models.CharField(max_length=200, verbose_name="Наименование файла")

    def __str__(self):
        return self.name