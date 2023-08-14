from django.urls import path
from .views import HbrsData
urlpatterns = [
    #Data from models
    path('hbrs-data', HbrsData.as_view(),name='hbrs-data'),
]