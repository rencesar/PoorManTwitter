# Generated by Django 2.2.3 on 2019-07-03 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tweet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=50, verbose_name='Tweet message')),
                ('date', models.DateTimeField(auto_now_add=True, verbose_name='Created date')),
                ('name', models.CharField(max_length=25, verbose_name='Name')),
            ],
        ),
    ]
