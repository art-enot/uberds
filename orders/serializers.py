from rest_framework import serializers
from .models import Order, OrderFile, roadNns, roadGs, roadGsPilot, autonomicNns, autonomicGs, autonomicGsPilot

class OrderFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderFile
        fields = ['id', 'file', 'name']

class roadNnsSerializer(serializers.ModelSerializer):
    class Meta:
        model = roadNns
        fields = '__all__'

class roadGsSerializer(serializers.ModelSerializer):
    class Meta:
        model = roadGs
        fields = '__all__'

class roadGsPilotSerializer(serializers.ModelSerializer):
    class Meta:
        model = roadGsPilot
        fields = '__all__'

class autonomicNnsSerializer(serializers.ModelSerializer):
    class Meta:
        model = autonomicNns
        fields = '__all__'

class autonomicGsSerializer(serializers.ModelSerializer):
    class Meta:
        model = autonomicGs
        fields = '__all__'

class autonomicGsPilotSerializer(serializers.ModelSerializer):
    class Meta:
        model = autonomicGsPilot
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    road_nns = roadNnsSerializer(many=True, read_only=True)
    road_gs = roadGsSerializer(many=True, read_only=True)
    road_gs_pilot = roadGsPilotSerializer(many=True, read_only=True)
    autonomic_nns = autonomicNnsSerializer(many=True, read_only=True)
    autonomic_gs = autonomicGsSerializer(many=True, read_only=True)
    autonomic_gs_pilot = autonomicGsPilotSerializer(many=True, read_only=True)
    class Meta:
        model = Order
        fields = '__all__'