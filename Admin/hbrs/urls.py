from django.urls import path
from . import views
from .views import HbrsData
urlpatterns = [
    #Data from models
    path('hbrs-data', HbrsData.as_view(),name='hbrs-data'),
    path('json-data', views.json_data_view, name='json-data'),
]