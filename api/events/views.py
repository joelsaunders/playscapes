from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import serializers, viewsets

from events.models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            'name', 'start_date', 'schedule_text', 'image_url', 'link_url'
        )


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Event.objects.all().order_by('start_date')
    serializer_class = EventSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('event_type',)
