import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AuthResponse from '../models/authResponse';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import AuthRequest from '../models/authRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'https://localhost:7241/api/auth';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  authenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  login(username: string, password: string, expiration?: number): Observable<AuthResponse> {
    const authRequest = new AuthRequest(username, password, expiration);
    return this.httpClient.post<AuthResponse>(`${this.baseUrl}/authenticate`, authRequest);
  }
}
