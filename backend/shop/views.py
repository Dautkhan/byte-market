from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .models import Order
from .serializers import  OrderSerializer, OrderCreateSerializer

from .models import Category, Product, CartItem
from .serializers import (
    CategorySerializer,
    ProductSerializer,
    CartItemSerializer,
    CartItemCreateSerializer,
)


@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


class CategoryDetailAPIView(APIView):
    def get(self, request, pk):
        category = Category.objects.get(pk=pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)


class ProductDetailAPIView(APIView):
    def get(self, request, pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


@api_view(['POST'])
def create_product(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_product(request, pk):
    product = Product.objects.get(pk=pk)
    serializer = ProductSerializer(product, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_product(request, pk):
    product = Product.objects.get(pk=pk)
    product.delete()
    return Response({"message": "Deleted"})


class UserCartAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cart_items = CartItem.objects.filter(user=request.user)
        serializer = CartItemSerializer(cart_items, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CartItemCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserOrderAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        orders = Order.objects.filter(user = request.user)
        serializer = OrderSerializer(orders, many = True)
        return Response(serializer.data)

    def post(self, request):
        order = Order.objects.create(user = request.user)
        serializer = OrderSerializer(order)
        return Response(serializer.data, status = status.HTTP_201_CREATED)
