from django.urls import path

from . import views


urlpatterns = [
    path('', views.MainTemplatePage.as_view()),
    path('tweets/', views.TweetsListCreateAPIView.as_view()),
]
