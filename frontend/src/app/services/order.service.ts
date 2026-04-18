import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface OrderItem{
  id: number;
  product: {
    id:number;
    name: string;
  };
  quantity: number;
  price:string
}

export interface Order{
  id:number;
  created_at:string;
  total_price: string;
  items: OrderItem[];
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly apiUrl = `${environment.apiUrl}/orders/`;
  constructor(private http: HttpClient) {
  }
  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl);
  }
  createOrder(): Observable<Order>{
    return this.http.post<Order>(this.apiUrl,{});
  }
}







