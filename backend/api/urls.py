from django.urls import path
from . import views

urlpatterns = [
    path("records/", views.RecordCreate.as_view(), name="record-list"),
    path("records/delete/<int:pk>/", views.RecordDelete.as_view(), name="record-delete"),
]