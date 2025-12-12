from django.urls import path
from .views import GameSessionList, EventList

urlpatterns = [
    path('game_sessions/', GameSessionList.as_view()),
    path('events/', EventList.as_view()),
]
