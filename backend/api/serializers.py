from rest_framework import serializers
from .models import Spell, Class, Specie, MagicItem

class SpellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spell
        fields = '__all__'

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'

class SpecieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specie
        fields = '__all__'

class MagicItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MagicItem
        fields = '__all__'
