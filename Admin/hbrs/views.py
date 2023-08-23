from django.shortcuts import render
from django.http import JsonResponse
from django.urls import reverse_lazy
from django.views.generic.base import TemplateView
from .models import Models_data

# Create your views here.
class HbrsData(TemplateView):
    template_name = ('hbrs/hbrs.html')
    success_url = reverse_lazy('hbrs-data:hbrs-data')
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['models_data'] = Models_data.objects.all()
        return context

def json_data_view(_request):
    data_har = list(Models_data.objects.values())
    if (len(data_har)>0):
        data_har = {'message':'success','data':data_har}
    else:
        data_har = {'message':'No hay datos'}
    return JsonResponse(data_har)
