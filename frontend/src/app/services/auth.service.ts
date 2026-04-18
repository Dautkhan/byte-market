import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, catchError } from 'rxjs';
import { environment } from '../../environments/environments';

interface LoginResponse {
  access:string;
  refresh:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private readonly apiUrl = `${environment.apiUrl}.auth`;

    constructor(private http:HttpClient) {
    }
    Login(username: string, password: string):Observable<LoginResponse>{
      return this.http.post<LoginResponse>(`${this.apiUrl}/login/`,{
        username,
        password
        }
        ).pipe(
          tap((response) =>{
            localStorage.setItem('access_token', response.access);
            localStorage.setItem('refresh_token', response.refresh);
          })
      );
    }
    Logout():Observable<any>{
      const refresh = localStorage.getItem('refresh_token');
      if (!refresh){
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
    return !!localStorage.getItem('access_token');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  clearTokens(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
