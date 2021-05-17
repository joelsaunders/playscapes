from rest_framework import serializers, viewsets

from events.models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            'name', 'start_date', 'schedule_text', 'end_date', 'image_url'
        )


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
