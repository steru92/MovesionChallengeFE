import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Company from '../models/company';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'https://localhost:7241/api/company';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<Company[]> {
    let result = new Observable<Company[]>();
    const token = this.authService.getStoredToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      result = this.httpClient.get<Company[]>(`${this.baseUrl}/getall`, { headers: headers });
    }
    return result;
  }

  public delete(c: Company): Observable<void> {
    let result = new Observable<void>();
    const token = this.authService.getStoredToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      result = this.httpClient.delete<void>(`${this.baseUrl}?id=${c.id}`, { headers: headers });
    }
    return result;
  }

  public insert(c: Company): Observable<void> {
    let result = new Observable<void>();
    const token = this.authService.getStoredToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      result = this.httpClient.post<void>(`${this.baseUrl}`, c, { headers: headers });
    }
    return result;
  }

  public update(c: Company): Observable<void> {
    let result = new Observable<void>();
    const token = this.authService.getStoredToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      result = this.httpClient.put<void>(`${this.baseUrl}`, c, { headers: headers });
    }
    return result;
  }
}
