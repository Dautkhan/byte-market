import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

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

  constructor(private http:HttpClient) {}

  getProducts(search: string = '', categoryId?:number): Observable<Product[]>{
    let params = new HttpParams();
    const trimmedSearch = search.trim();

    if (trimmedSearch) {
      params = params.set('search', trimmedSearch);
    }

    if (categoryId) {
      params = params.set('category', String(categoryId));
    }

    return this.http.get<Product[]>(`${this.apiUrl}/products/`, { params });
  }
}











