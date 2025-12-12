from django.urls import path
from .views import SpellList, ClassList, SpecieList, MagicItemList

urlpatterns = [
    path('dnd/spells/', SpellList.as_view()),
    path('dnd/classes/', ClassList.as_view()),
    path('dnd/species/', SpecieList.as_view()),
    path('dnd/magic_items/', MagicItemList.as_view()),
]
