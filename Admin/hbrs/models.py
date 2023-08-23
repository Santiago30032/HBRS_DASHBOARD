from django.db import models


# Create your models here.

class Models_data(models.Model):
    id = models.CharField(max_length=300, db_column='id', primary_key=True)
    hora = models.CharField(max_length=300,db_column='hora')
    edad = models.CharField(max_length=300,db_column='edad')
    genero = models.CharField(max_length=300,db_column='genero')
    emocion = models.CharField(max_length=300,db_column='emocion')

    class Meta:
        managed = False
        db_table ='Modelo_har'
    
    def __str__(self):
        return f'id: {self.id}, Hora: {self.hora}, Edad: {self.edad},Genero: {self.datos} Emocion: {self.emocion}'


