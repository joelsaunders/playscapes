from django.db import models
from django.db.models import Index


class Event(models.Model):
    EVENT_TYPE_CHOICES = (
        ('PP', 'Playscapes Presents'),
        ('NVC', 'Non-violent Communication'),
    )
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    start_date = models.DateTimeField()
    schedule_text = models.CharField(max_length=200, null=True, blank=True)
    end_date = models.DateTimeField()
    image_url = models.TextField()
    event_type = models.CharField(choices=EVENT_TYPE_CHOICES, max_length=3)

    class Meta:
        indexes = [
            Index(fields=['event_type']),
            Index(fields=['start_date'])
        ]
