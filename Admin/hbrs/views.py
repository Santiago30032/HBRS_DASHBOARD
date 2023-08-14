from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.base import TemplateView
from .models import Models_data

# Create your views here.
class HbrsData(TemplateView):
    template_name = ('hbrs/hbrs.html')
    success_url = reverse_lazy('hbrs-data:hbrs-data')
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['models_data'] = Models_data.objects.all()  # Obtén todos los objetos de Models_data
        return context