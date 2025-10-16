from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('inicio', views.inicio, name='inicio'),
    path('ambiental', views.ambiental, name='ambiental'),

    path('responsabilidad_social', views.responsabilidad_social, name='responsabilidad_social'),

    path('gobernanza', views.gobernanza, name='gobernanza'),

    path('materialidad', views.materialidad, name='materialidad'),
    path('comunidades', views.atencion_comunidad, name='comunidades'),
    path('vinculacion-comunidad', views.vinculacion_comunidad, name='vinculacion-comunidad'),

    # path('estrategia-asg', views.estrategia_asg, name='estrategia-asg'),
    # path('gestion-ambiental', views.gestion_ambiental, name='gestion-ambiental'),
    # path('vinculacion-ods', views.vinculacion_ods, name='vinculacion-ods'),
    # path('gestion-recursos', views.gestion_recursos, name='gestion-recursos'),
    # path('residuos', views.residuos, name='residuos'),
    # path('contenido-descargable', views.contenido_descargable, name='contenido-descargable'),
    # path('cadena-suministros', views.cadena_suministros, name='cadena-suministros'),
    path('contacto', views.contacto, name='contacto'),
    path('send-subscription', views.send_subscription, name='send-subscription'),
    path('send-mail-contact', views.send_mail_contact, name='send-mail-contact'),

    path('send-cuestionario', views.send_cuestionario, name='send-cuestionario'),
    path('send-buzon-quejas', views.send_buzon_quejas, name='send-buzon-quejas'),
]
