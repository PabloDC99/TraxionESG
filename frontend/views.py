import json

from django.contrib.staticfiles.storage import staticfiles_storage
from django.core.mail import send_mail
from django.http import JsonResponse
from django.shortcuts import render
# Create your views here.
from django.template import loader
from django.utils.translation import gettext as _
from django.views import generic
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.gzip import gzip_page
from django.views.decorators.http import require_POST


class EventosView(generic.ListView):
    def get_event_amb_es_data():
        with open('frontend/static/datos/eventos.json', encoding='utf-8') as f:
            data = json.load(f)
        eventsAmbESList = data["eventos_ambientales"]
        # Get the blog from id and add it to the context
        context = eventsAmbESList
        return eventsAmbESList

    def get_event_soc_es_data():
        with open('frontend/static/datos/eventos.json', encoding='utf-8') as f:
            data = json.load(f)
        eventsSocESList = data["eventos_sociales"]

        # Get the blog from id and add it to the context
        context = eventsSocESList
        return eventsSocESList

    def get_event_cor_es_data():
        with open('frontend/static/datos/eventos.json', encoding='utf-8') as f:
            data = json.load(f)
        eventsCorESList = data["eventos_corporativas"]
        # Get the blog from id and add it to the context
        context = eventsCorESList
        return eventsCorESList


def get_event_en_data():
    eventsENList = [
        {
            "title": "VIVA AEROBUS REPORTS MONTHLY PASSENGER FIGURES CORRESPONDING TO FEBRUARY 2023",
            "date": "2023-03-08",
            "description": "description",
            "url": "https://investorcloud.s3.amazonaws.com/VivaAerobus/InformacionFinanciera/SalaPrensa/2023-03-08-Trafico-febrero-2023-en.pdf"
        }
    ]
    # Get the blog from id and add it to the context
    context = eventsENList
    return eventsENList


@gzip_page
# @cache_page(60 * 15)
def index(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    eventos_soc = EventosView.get_event_soc_es_data()
    eventos_cor = EventosView.get_event_cor_es_data()
    context = {
        'title': _("Demo"),
        'page': 'index',
        'eventos_amb': eventos_amb,
        'eventos_soc': eventos_soc,
        'eventos': eventos_amb + eventos_soc + eventos_cor,

    }
    return render(request, '{0}/frontend/inicio.html'.format(request.LANGUAGE_CODE), context)

@gzip_page
def inicio(request):
    context = {
        'title': _("Ambiental"),
        'page': 'inicio',
    }
    return render(request, '{0}/frontend/inicio.html'.format(request.LANGUAGE_CODE), context)

@gzip_page
def ambiental(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    context = {
        'title': _("Planeta"),
        'page': 'ambiental',
        'eventos': eventos_amb,
        'imagen': staticfiles_storage.url('images/headers/header-planeta.jpg'),
    }
    return render(request, '{0}/frontend/ambiental.html'.format(request.LANGUAGE_CODE), context)

@gzip_page
def atencion_comunidad(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    context = {
        'title': _("Comunidad"),
        'page': 'comunidades',
        'eventos': eventos_amb,
        'imagen': staticfiles_storage.url('images/headers/Comunidad.png'),
    }
    return render(request, '{0}/frontend/atencion_comunidad.html'.format(request.LANGUAGE_CODE), context)


# Modelo ASG
@gzip_page
def materialidad(request):
    eventos_amb = EventosView.get_event_amb_es_data()
    context = {
        'title': _("Modelo ASG"),
        'page': 'materialidad',
        'eventos': eventos_amb,
        'imagen': staticfiles_storage.url('images/headers/header-modeloasg.png'),
    }
    return render(request, '{0}/frontend/modelo_asg/materialidad.html'.format(request.LANGUAGE_CODE), context)


@gzip_page
def vinculacion_comunidad(request):
    eventos_soc = EventosView.get_event_soc_es_data()
    context = {
        'title': _("Vinculación con la comunidad"),
        'page': 'vinculacion-comunidad',
        'eventos': eventos_soc,
        'imagen': staticfiles_storage.url('images/headers/Comunidad.png'),
    }
    return render(request,
                  '{0}/frontend/responsabilidad_social/vinculacion_comunidad.html'.format(request.LANGUAGE_CODE),
                  context)


# Gobernanza
@gzip_page
def gobernanza(request):
    eventos_cor = EventosView.get_event_cor_es_data()

    context = {
        'title': _("Gobernanza"),
        'page': 'gobernanza',
        'eventos': eventos_cor,
        'imagen': staticfiles_storage.url('images/headers/header-gobernanza.png'),
    }
    return render(request, '{0}/frontend/gobernanza.html'.format(request.LANGUAGE_CODE), context)



# Medio Ambiente
@gzip_page
def gestion_ambiental(request):
    context = {
        'title': _("Gestión Ambiental"),
        'page': 'gestion-ambiental',
        'imagen': staticfiles_storage.url('images/headers/Ambiente.png'),
    }
    return render(request, '{0}/frontend/medio_ambiente/gestion_ambiental.html'.format(request.LANGUAGE_CODE), context)



# Responsabilidad Social
@gzip_page
def responsabilidad_social(request):
    eventos_soc = EventosView.get_event_soc_es_data()

    context = {
        'title': _("TALENTO, CULTURA CORPORATIVA Y COMUNIDAD"),
        'page': 'responsabilidad-social',
        'eventos': eventos_soc,
        'imagen': staticfiles_storage.url('images/headers/header-ambiental.png'),
    }
    return render(request, '{0}/frontend/responsabilidad_social.html'.format(request.LANGUAGE_CODE), context)




@gzip_page
def contacto(request):
    # if request.LANGUAGE_CODE == 'es':
    #     imagen = staticfiles_storage.url('images/contacto-pic.png')
    # else:
    #     imagen = staticfiles_storage.url('images/contact.png')

    context = {
        'title': _("Contacto"),
        'page': 'contacto',
        'section': _('Contacto'),
        'imagen': staticfiles_storage.url('images/headers/header-contacto.png'),

        # 'imagen': imagen,
    }
    return render(request, '{0}/frontend/contacto.html'.format(request.LANGUAGE_CODE), context)


@csrf_exempt
@require_POST
def send_subscription(request):
    email = request.POST['email']

    html_message = loader.render_to_string(
        '{0}/frontend/emails/send_mail.html'.format(request.LANGUAGE_CODE),
        {
            'email': email,
        }
    )

    send_mail(
        'Usuario ' + email + ' desea subscribirse al  sitio FINSA ESG',
        'Usuario con email ' + email + " desea subscribirse",
        'it@investorcloud.net',
        ['sustentabilidad@cydsa.com'],
        html_message=html_message
    )

    return JsonResponse({"success": "true"}, safe=False)


@require_POST
def send_mail_contact(request):
    context = {'title': 'Inicio'}
    name = request.POST['form_name']
    # company = request.POST['form_company']
    email = request.POST['form_email']
    phone = request.POST['form_phone']
    # country = request.POST['form_country']
    # state = request.POST['form_state']
    theme = request.POST['form_theme']
    message = request.POST['form_message']

    html_message = loader.render_to_string(
        '{0}/frontend/emails/send_mail_contact.html'.format(request.LANGUAGE_CODE),
        {
            'name': name,
            # 'company': company,
            'email': email,
            'phone': phone,
            # 'country': country,
            # 'state': state,
            'theme': theme,
            'message': message
        }
    )

    # send_mail(
    #     'Usuario anónimo desea contactar con admin del sitio Fortaleza',
    #     '',
    #     'it@investorcloud.net',
    #     [theme, ],  # ['info@murano.com.mx',],
    #     html_message=html_message
    # )

    send_mail(
        'Usuario anónimo desea contactar con admin del sitio FINSA ESG',
        '',
        'it@investorcloud.net',
        ['sustentabilidad@cydsa.com'],
        # ['tania.barroso@irstrat.com'],
        html_message=html_message
    )
    return JsonResponse({"success": "true"}, safe=False)

@csrf_exempt
@require_POST
def send_cuestionario(request):
    nombre = request.POST['nombre']
    empresa = request.POST['empresa']
    correo = request.POST['correo']

    html_message = loader.render_to_string(
        '{0}/frontend/emails/send_mail_cuestionario.html'.format(request.LANGUAGE_CODE),
        {
            'nombre': nombre,
            'empresa': empresa,
            'correo': correo,
        }
    )

    send_mail(
        'Cuestionario FINSA ESG',
        'Cuestionario FINSA ESG',
        'it@investorcloud.net',
        ['info@finsa.net'],
        html_message=html_message
    )

    return JsonResponse({"success": "true"}, safe=False)


@csrf_exempt
@require_POST
def send_buzon_quejas(request):
    nombre = request.POST['nombre']
    apellido = request.POST['apellido']
    apellido2 = request.POST['apellido2']
    telefono = request.POST['telefono']
    correo = request.POST['correo']

    html_message = loader.render_to_string(
        '{0}/frontend/emails/send_mail_buzon_quejas.html'.format(request.LANGUAGE_CODE),
        {
            'nombre': nombre,
            'apellido': apellido,
            'apellido2': apellido2,
            'telefono': telefono,
            'correo': correo,
        }
    )

    send_mail(
        'Buzón de Quejas FINSA ESG',
        'Buzón de Quejas FINSA ESG',
        'it@investorcloud.net',
        ['info@finsa.net'],
        html_message=html_message
    )

    return JsonResponse({"success": "true"}, safe=False)
