from django.conf.urls import url
from app import views

urlpatterns = [
    url(r"^home/$",views.home,name='home'),
    url(r"^market/$",views.market,name='market'),
    url(r"^market_with_params/(\d+)/(\d+)/(\d+)$",views.market_with_params,name='market_with_params'),
    url(r"^cart/$",views.cart,name='cart'),
    url(r"^mine/$",views.mine,name='mine'),
    url(r"^confirm/(.*)$",views.confirm,name='confirm'),
    url(r"^register/$",views.register.as_view(),name='register'),
    url(r"^loginAPI/$",views.loginAPI.as_view(),name='loginAPI'),
    url(r"^logoutAPI/$",views.logoutAPI.as_view(),name='logoutAPI'),
    url(r"^CartAPI/$",views.CartAPI.as_view(),name='CartAPI'),
    url(r"^cart_status/$",views.cart_status.as_view()),
    url(r"^cart_all_status/$",views.cart_all_status.as_view()),
    url(r"^cart_item/$",views.cart_item.as_view()),
    url(r"^order/$",views.order.as_view(),name='order'),
    url(r"^check_uname/$",views.check_uname),
]
