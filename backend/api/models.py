from django.db import models

class Task(models.Model):
    task_name = models.CharField(max_length=200)
    created_at = models.DateTimeField("created at", auto_now_add=True)

    def __str__(self):
        return self.task_name

