from django.contrib import admin
from .models import Requirement, RequirementFile

class RequirementFileInline(admin.TabularInline):
    model = RequirementFile
    extra = 1
    fields = ['name', 'file']

@admin.register(Requirement)
class RequirementAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    search_fields = ('title', 'description')
    inlines = [RequirementFileInline]