import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, catchError } from 'rxjs';
import { environment } from '../../environments/environments';

interface LoginResponse {
  access: string;
  refresh: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  private readonly hasLocalStorage =
    typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login/`, {
        username,
        password,
      })
      .pipe(
        tap((response) => {
          if (this.hasLocalStorage) {
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);
          }
        })
      );
  }

  logout(): Observable<unknown> {
    const refresh = this.hasLocalStorage ? localStorage.getItem('refresh_token') : null;
    if (!refresh) {
      this.clearTokens();
      return of(null);
    }

    return this.http.post(`${this.apiUrl}/logout/`, { refresh }).pipe(
      tap(() => this.clearTokens()),
      catchError(() => {
        this.clearTokens();
        return of(null);
      })
    );
  }

  isLoggedIn(): boolean {
    if (!this.hasLocalStorage) {
      return false;
    }
    return !!localStorage.getItem('access_token');
  }

  getAccessToken(): string | null {
    if (!this.hasLocalStorage) {
      return null;
    }
    return localStorage.getItem('access_token');
  }

  clearTokens(): void {
    if (!this.hasLocalStorage) {
      return;
    }
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
