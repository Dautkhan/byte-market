from django.urls import path
from .views import UserCartAPIView
from .views import create_product,update_product,delete_product
from .views import(
    category_list,
    product_list,
    CategoryDetailAPIView,
    ProductDetailAPIView,
)

urlpatterns = [
    path('categories/',category_list, name = 'category_list'),
    path('products/',product_list, name = 'product_list'),
    path('categories/<int:pk>/',CategoryDetailAPIView.as_view(), name = 'category_detail'),
    path('products/<int:pk>/', ProductDetailAPIView.as_view(), name = 'product_detail'),
    path('products/create/',create_product),
    path('products/update/<int:pk>/',update_product),
    path('products/delete/<int:pk>/',delete_product),
    path('cart/', UserCartAPIView.as_view(), name='user-cart'),
]
