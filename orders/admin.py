# import nested_admin
from django.contrib import admin
from .models import Order, OrderFile, roadNns, roadGs, roadGsPilot, autonomicNns, autonomicGs, autonomicGsPilot
from tinymce.widgets import TinyMCE
from django.db import models

# road NNS
class roadNnsInline(admin.TabularInline):
    model = roadNns
    extra = 0

class roadGsInline(admin.TabularInline):
    model = roadGs
    extra = 0

class roadGsPilotInline(admin.TabularInline):
    model = roadGsPilot
    extra = 0

class autonomicNnsInline(admin.TabularInline):
    model = autonomicNns
    extra = 0

class autonomicGsInline(admin.TabularInline):
    model = autonomicGs
    extra = 0

class autonomicGsPilotInline(admin.TabularInline):
    model = autonomicGsPilot
    extra = 0

class OrderFileInline(admin.TabularInline):
    model = OrderFile
    extra = 0
    fields = ['name', 'file']

@admin.register(Order)

class OrderAdmin(admin.ModelAdmin):
    list_display = ('title', 'job_object', 'rnp_number', 'start_drilling_date', 'mobilization_period', 'service_period', 'max_posts')
    search_fields = ('title', 'rnp_number')
    inlines = [roadNnsInline, roadGsInline, roadGsPilotInline, autonomicNnsInline, autonomicGsInline, autonomicGsPilotInline, OrderFileInline]
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE(attrs={'cols': 80, 'rows': 30})},
    }