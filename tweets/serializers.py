from rest_framework import serializers

from . import models


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tweet
        fields = ('name', 'message', 'date')
        read_only_fields = ('date',)
