from django.db import models
from tinymce.models import HTMLField

class Order(models.Model):
    title = models.CharField(max_length=200, verbose_name="Наименование заказ-наряда")
    name_choise = models.CharField(max_length=200, verbose_name="Наименование процедуры выбора")
    job_object = models.CharField(max_length=200, verbose_name="Объект выполнения работ / оказания услуг")
    rnp_number = models.CharField(max_length=200, verbose_name="Реестровый номер процедуры (РНП)")
    start_drilling_date = models.CharField(max_length=200, verbose_name="Сроки начала бурения 1 скважины")
    mobilization_period = models.CharField(max_length=200, verbose_name="Сроки мобилизации")
    service_period = models.CharField(max_length=200, verbose_name="Период оказания услуг")
    max_posts = models.CharField(max_length=200, verbose_name="Ориентировочное max количество постов")
    order_сonditions = HTMLField(verbose_name="Описание условий", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name = "Наряд-заказ"
        verbose_name_plural = "Наряд-заказы"

    def __str__(self):
        return self.title
    

class roadNns(models.Model):
    order = models.ForeignKey(Order, related_name='road_nns', on_delete=models.CASCADE)
    diameter = models.CharField(verbose_name="Диаметр долота, мм.", max_length=50)
    unit = models.CharField(verbose_name="Единица измерения", max_length=50)
    standard = models.IntegerField(verbose_name="Норматив на скважину, м")
    cost_per_unit = models.DecimalField(verbose_name="Стоимость за ед. изм., руб./м", max_digits=10, decimal_places=2)

    quantity_well2025 = models.IntegerField(verbose_name="Кол-во скважин (2025г.)")
    price2025 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2025г.)")
    quantity_well2026 = models.IntegerField(verbose_name="Кол-во скважин (2026г.)")
    price2026 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2026г.)")
    quantity_well2027 = models.IntegerField(verbose_name="Кол-во скважин (2027г.)")
    price2027 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2027г.)")


    class Meta:
        verbose_name = "ННС (м/р с круглогодичным дорожным сообщением)"
        verbose_name_plural = "ННС (м/р с круглогодичным дорожным сообщением)"

class roadGs(models.Model):
    order = models.ForeignKey(Order, related_name='road_gs', on_delete=models.CASCADE)
    diameter = models.CharField(verbose_name="Диаметр долота, мм.", max_length=50)
    unit = models.CharField(verbose_name="Единица измерения", max_length=50)
    standard = models.IntegerField(verbose_name="Норматив на скважину, м")
    cost_per_unit = models.DecimalField(verbose_name="Стоимость за ед. изм., руб./м", max_digits=10, decimal_places=2)

    quantity_well2025 = models.IntegerField(verbose_name="Кол-во скважин (2025г.)")
    price2025 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2025г.)")
    quantity_well2026 = models.IntegerField(verbose_name="Кол-во скважин (2026г.)")
    price2026 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2026г.)")
    quantity_well2027 = models.IntegerField(verbose_name="Кол-во скважин (2027г.)")
    price2027 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2027г.)")

    class Meta:
        verbose_name = "ГС (м/р с круглогодичным дорожным сообщением)"
        verbose_name_plural = "ГС (м/р с круглогодичным дорожным сообщением)"


class roadGsPilot(models.Model):
    order = models.ForeignKey(Order, related_name='road_gs_pilot', on_delete=models.CASCADE)
    diameter = models.CharField(verbose_name="Диаметр долота, мм.", max_length=50)
    unit = models.CharField(verbose_name="Единица измерения", max_length=50)
    standard = models.IntegerField(verbose_name="Норматив на скважину, м")
    cost_per_unit = models.DecimalField(verbose_name="Стоимость за ед. изм., руб./м", max_digits=10, decimal_places=2)

    quantity_well2025 = models.IntegerField(verbose_name="Кол-во скважин (2025г.)")
    price2025 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2025г.)")
    quantity_well2026 = models.IntegerField(verbose_name="Кол-во скважин (2026г.)")
    price2026 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2026г.)")
    quantity_well2027 = models.IntegerField(verbose_name="Кол-во скважин (2027г.)")
    price2027 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2027г.)")

    class Meta:
        verbose_name = "ГС + Пилот (м/р с круглогодичным дорожным сообщением)"
        verbose_name_plural = "ГС + Пилот (м/р с круглогодичным дорожным сообщением)"


class autonomicNns(models.Model):
    order = models.ForeignKey(Order, related_name='autonomic_nns', on_delete=models.CASCADE)
    diameter = models.CharField("Диаметр долота, мм.", max_length=50)
    unit = models.CharField(verbose_name="Единица измерения", max_length=50)
    standard = models.IntegerField(verbose_name="Норматив на скважину, м")
    cost_per_unit = models.DecimalField(verbose_name="Стоимость за ед. изм., руб./м", max_digits=10, decimal_places=2)

    quantity_well2025 = models.IntegerField(verbose_name="Кол-во скважин (2025г.)")
    price2025 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2025г.)")
    quantity_well2026 = models.IntegerField(verbose_name="Кол-во скважин (2026г.)")
    price2026 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2026г.)")
    quantity_well2027 = models.IntegerField(verbose_name="Кол-во скважин (2027г.)")
    price2027 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2027г.)")

    class Meta:
        verbose_name = "ННС (Автономные м/р)"
        verbose_name_plural = "ННС (Автономные м/р)"

class autonomicGs(models.Model):
    order = models.ForeignKey(Order, related_name='autonomic_gs', on_delete=models.CASCADE)
    diameter = models.CharField(verbose_name="Диаметр долота, мм.", max_length=50)
    unit = models.CharField(verbose_name="Единица измерения", max_length=50)
    standard = models.IntegerField(verbose_name="Норматив на скважину, м")
    cost_per_unit = models.DecimalField(verbose_name="Стоимость за ед. изм., руб./м", max_digits=10, decimal_places=2)

    quantity_well2025 = models.IntegerField(verbose_name="Кол-во скважин (2025г.)")
    price2025 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2025г.)")
    quantity_well2026 = models.IntegerField(verbose_name="Кол-во скважин (2026г.)")
    price2026 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2026г.)")
    quantity_well2027 = models.IntegerField(verbose_name="Кол-во скважин (2027г.)")
    price2027 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2027г.)")

    class Meta:
        verbose_name = "ГС (Автономные м/р)"
        verbose_name_plural = "ГС (Автономные м/р)"

class autonomicGsPilot(models.Model):
    order = models.ForeignKey(Order, related_name='autonomic_gs_pilot', on_delete=models.CASCADE)
    diameter = models.CharField(verbose_name="Диаметр долота, мм.", max_length=50)
    unit = models.CharField(verbose_name="Единица измерения", max_length=50)
    standard = models.IntegerField(verbose_name="Норматив на скважину, м")
    cost_per_unit = models.DecimalField(verbose_name="Стоимость за ед. изм., руб./м", max_digits=10, decimal_places=2)

    quantity_well2025 = models.IntegerField(verbose_name="Кол-во скважин (2025г.)")
    price2025 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2025г.)")
    quantity_well2026 = models.IntegerField(verbose_name="Кол-во скважин (2026г.)")
    price2026 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2026г.)")
    quantity_well2027 = models.IntegerField(verbose_name="Кол-во скважин (2027г.)")
    price2027 = models.IntegerField(verbose_name="Стоимость за ед.изм., руб./м(2027г.)")

    class Meta:
        verbose_name = "ГС + Пилот (Автономные м/р)"
        verbose_name_plural = "ГС + Пилот (Автономные м/р)"

class OrderFile(models.Model):
    order = models.ForeignKey(Order, related_name='files', on_delete=models.CASCADE)
    file = models.FileField(upload_to='orders/', verbose_name="Прикрепленный файл")
    name = models.CharField(max_length=200, verbose_name="Наименование файла")

    class Meta:
        verbose_name = "Файл"
        verbose_name_plural = "Файлы"

    def __str__(self):
        return self.name