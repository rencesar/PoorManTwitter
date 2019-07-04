from rest_framework import serializers

from . import models


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tweet
        fields = ('name', 'message', 'date')
        extra_kwargs = {'date': {'format': "%m/%d/%Y %H:%M:%S"}}
