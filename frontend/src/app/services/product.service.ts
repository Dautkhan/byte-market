import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface Category{
  id:number;
  name: string;
}

export interface Product{
  id:number;
  name:string;
  price:string;
  description:string;
  image_url?:string;
  category:number;
  category_name?:string;
}

@Injectable({
  providedIn:'root'
})
export class ProductService{
  private readonly apiUrl = `${environment.apiUrl}`;

  constructor(private http:HttpClient) {
  }
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiUrl}/categories/`);
  }
  getProducts(search: string = '', categoryId?:number): Observable<Product[]>{
    let params = new HttpParams();
    if(search.trim()){
      params = params.set('search', search.trim());
    }
    if (search.trim()){
      params = params.set('search', search.trim());
    }
    if (categoryId) {
      params = params.set('search', categoryId);
    }
    return this.http.get<Product[]>(`${this.apiUrl}/products/`, { params });
  }
}











