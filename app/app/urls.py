from django.conf.urls import include, url, patterns
from django.contrib import admin
from django.views.generic import TemplateView

class MainView(TemplateView):
    template_name = 'index.html'

# class AdminView(TemplateView):
#     template_name = 'admin.html'

api_urls = [
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
]

urlpatterns = [
    # Examples:
    # url(r'^$', 'app.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # url(r'^admin/', include(admin.site.urls)),
    url(r'^admin/', MainView.as_view()),
    url(r'^$', MainView.as_view()),

    # Rest Auth
    # API
    url(r'^api/v1/', include(api_urls))
]
