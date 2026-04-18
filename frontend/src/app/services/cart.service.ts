import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface ProductInCart{
  id:number;
  name:string;
  price:string;
  description:string;
}

export interface CartItem {
  id:number;
  product: ProductInCart;
  quantity: number;
  line_total: number;
}
export interface CartResponse {
  items: CartItem[];
  total_price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService{
  private readonly apiUrl = `${environment.apiUrl}/cart/`;

  constructor(private http: HttpClient) {
  }
  getCart(): Observable<CartResponse> {
    return this.http.get<CartResponse>(this.apiUrl);
  }
  addToCart(productId: number, quantity: number = 1): Observable<any> {
    return this.http.post(this.apiUrl,{
      product_id: productId,
      quantity
    });
  }
  updateQuantity(itemId: number, quantity:number): Observable<any> {
    return this.http.put(`${this.apiUrl}${itemId}/`,{
      quantity
    });
  }
  removeItem(itemId: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}${itemId}/`);
  }

}









