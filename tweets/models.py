from django.db import models


class Tweet(models.Model):
    message = models.CharField(verbose_name='Tweet message', max_length=50)
    # Refactor this if the app get some latency through user and server, otherwise you will lose some ms or even s
    date = models.DateTimeField(verbose_name='Created date', auto_now_add=True)

    name = models.CharField(verbose_name='Name', max_length=25)
