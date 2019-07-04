from django.views.generic import TemplateView
from rest_framework import generics

from tweets.serializers import TweetSerializer
from .models import Tweet


class MainTemplatePage(TemplateView):
    template_name = 'index.html'


class TweetsListCreateAPIView(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

    def get_queryset(self):
        order_by = self.request.query_params.get('order_by', 'date')
        return self.queryset.order_by(order_by)
