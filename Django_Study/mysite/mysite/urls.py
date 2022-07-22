from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # pybo/로 시작하는 페이지를 요청하면 pybo/urls.py파일의 매핑정보를 읽어 처리하라.
    path('pybo/', include('pybo.urls')),
]