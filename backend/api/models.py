from django.db import models

# Create your models here.
class Spell(models.Model):
    name = models.CharField(max_length=100)
    level = models.IntegerField()
    school = models.CharField(max_length=50)
    casting_time = models.CharField(max_length=100)
    range = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    components = models.CharField(max_length=200)
    description = models.TextField(default="To be uncovered...")
    concentration = models.CharField(max_length=50)
    ritual = models.BooleanField(default=False)
    source_book = models.CharField(max_length=10, default="Unknown")

    def __str__(self):
        return self.name

class Class(models.Model):
    name = models.CharField(max_length=50)
    hit_die = models.CharField(max_length=50)
    primary_ability = models.CharField(max_length=50)
    saving_throws = models.JSONField(default=list)
    armor_proficiencies = models.JSONField(default=list)
    weapon_proficiencies = models.JSONField(default=list)
    tool_proficiencies = models.JSONField(default=list)
    skills_available = models.JSONField(default=list)
    spellcasting = models.BooleanField(default=False)
    archetypes = models.JSONField(default=list)
    short_description = models.TextField(default="To be uncovered...")
    source_book = models.CharField(max_length=10, default="Unknown")

    def __str__(self):
        return self.name
    
class Specie(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(default="To be uncovered...")
    traits = models.JSONField(default=list)
    source_book = models.CharField(max_length=10, default="Unknown")

    def __str__(self):
        return self.name
    
class MagicItem(models.Model):
    name = models.CharField(max_length=50)
    rarity = models.CharField(max_length=50)
    price_range = models.CharField(max_length=50)
    description = models.TextField(default="To be uncovered...")
    source_book = models.CharField(max_length=10, default="Unknown")

    def __str__(self):
        return self.name
