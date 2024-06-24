from rest_framework import serializers
from .models import Requirement, RequirementFile

class RequirementFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequirementFile
        fields = ['id', 'file', 'name']

class RequirementSerializer(serializers.ModelSerializer):
    files = RequirementFileSerializer(many=True, read_only=True)

    class Meta:
        model = Requirement
        fields = ['id', 'title', 'description', 'files']