from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Spell, Class, Specie, MagicItem
from .serializers import SpellSerializer, ClassSerializer, SpecieSerializer, MagicItemSerializer

# Create your views here

class SpellList(APIView):
    def get(self, request):
        spells = Spell.objects.all()
        serializer = SpellSerializer(spells, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SpellSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ClassList(APIView):
    def get(self, request):
        classes = Class.objects.all()
        serializer = SpellSerializer(classes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class SpecieList(APIView):
    def get(self, request):
        species = Specie.objects.all()
        serializer = SpecieSerializer(species, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SpecieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MagicItemList(APIView):
    def get(self, request):
        magic_items = MagicItem.objects.all()
        serializer = MagicItemSerializer(magic_items, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MagicItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

