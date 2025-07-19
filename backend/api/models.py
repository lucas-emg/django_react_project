from django.db import models
from django.contrib.auth.models import User

class Record(models.Model):
    OPINION_CHOICES = [
        ('bad', 'Bad'),
        ('good', 'Good'),
        ('great', 'Great'),
    ]

    title = models.CharField(max_length=100, null=False)
    artist = models.CharField(max_length=100, null=False)
    listened = models.BooleanField(default=False)
    listened_at = models.DateTimeField(null=True)
    opinion = models.CharField(max_length=10, choices=OPINION_CHOICES, null=True, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="records")

    def __str__(self):
        return self.title
