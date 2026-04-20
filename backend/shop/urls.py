from django.urls import path
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
]
