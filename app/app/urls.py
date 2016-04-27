from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

class MainView(TemplateView):
    template_name = 'index.html'

urlpatterns = [
    # Examples:
    # url(r'^$', 'app.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', MainView.as_view()),

    # Rest Auth
    url(r'^rest-auth/', include('rest_auth.urls')),
]
