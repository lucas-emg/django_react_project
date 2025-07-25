from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Record

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ["id", "title", "artist", "listened", "listened_at", "opinion", "owner"]
        extra_kwargs = {"owner": {"read_only": True}}
