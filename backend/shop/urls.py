from django.urls import path
from .views import (
    category_list,
    product_list,
    CategoryDetailAPIView,
    ProductDetailAPIView,
    create_product,
    update_product,
    delete_product,
    UserCartAPIView,
    CartItemDetailAPIView,
    UserOrderAPIView,
)

urlpatterns = [
    path('categories/', category_list, name='category-list'),
    path('products/', product_list, name='product-list'),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('products/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail'),

    path('products/create/', create_product, name='product-create'),
    path('products/update/<int:pk>/', update_product, name='product-update'),
    path('products/delete/<int:pk>/', delete_product, name='product-delete'),

    path('cart/', UserCartAPIView.as_view(), name='user-cart'),
    path('cart/<int:pk>/', CartItemDetailAPIView.as_view(), name='cart-item-detail'),

    path('orders/', UserOrderAPIView.as_view(), name='user-orders'),
]