from django.db import models

# Create your models here.
class GameSession(models.Model):
    name = models.CharField(max_length=50)
    number = models.IntegerField()
    campaign = models.CharField(max_length=50)
    system = models.CharField(max_length=100)
    date_time = models.DateTimeField()
    location = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
    
class Event(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    date_time = models.DateTimeField()
    description = models.TextField(blank=True)
    speakers = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.name