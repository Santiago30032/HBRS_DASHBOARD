# Generated by Django 3.2.9 on 2023-08-14 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Models_data',
            fields=[
                ('id', models.CharField(max_length=300, primary_key=True, serialize=False)),
                ('hora', models.CharField(max_length=300)),
                ('datos', models.CharField(max_length=300)),
            ],
            options={
                'db_table': 'Modelo_har',
                'managed': False,
            },
        ),
    ]
