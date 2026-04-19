import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CartService, CartItem, CartResponse } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartResponse = {
    items: [],
    total_price: 0
  };

  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.loading = true;
    this.cartService.getCart().subscribe({
      next: (data) => {
        this.cart = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Failed to load cart.';
      }
    });
  }

  increase(item: CartItem): void {
    this.update(item.id, item.quantity + 1);
  }

  decrease(item: CartItem): void {
    if (item.quantity > 1) {
      this.update(item.id, item.quantity - 1);
    }
  }

  update(itemId: number, quantity: number): void {
    this.cartService.updateQuantity(itemId, quantity).subscribe({
      next: () => this.loadCart(),
      error: () => {
        this.errorMessage = 'Failed to update quantity.';
      }
    });
  }

  remove(itemId: number): void {
    this.cartService.removeItem(itemId).subscribe({
      next: () => this.loadCart(),
      error: () => {
        this.errorMessage = 'Failed to remove item.';
      }
    });
  }

  checkout(): void {
    this.orderService.createOrder().subscribe({
      next: () => {
        this.successMessage = 'Order created successfully.';
        void this.router.navigate(['/orders']);
      },
      error: () => {
        this.errorMessage = 'Could not create order.';
      }
    });
  }
}
