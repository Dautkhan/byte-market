from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Product
from .serializers import CategorySerializer,ProductSerializer
@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data)

class CategoryDetailAPIView(APIView):
    def get(self, request,pk):
        category = Category.objects.get(pk=pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

class ProductDetailAPIView(APIView):
    def get(self,request,pk):
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


@api_view(['POST'])
def create_product(request):
    serializer = ProductSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response (serializer.errors)

@api_view(['PUT'])
def update_product(request,pk):
    serializer = ProductSerializer(produt, data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['DELETE'])
def delete_product(request,pk):
    product = Product.objects.get(pk=pk)
    product.delete()
    return Response({"message": "Deleted"})