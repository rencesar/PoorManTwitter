from django.views.generic import TemplateView
from rest_framework import generics

from tweets.serializers import TweetSerializer
from .models import Tweet


class MainTemplatePage(TemplateView):
    template_name = 'index.html'


class TweetsListCreateAPIView(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
