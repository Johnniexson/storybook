import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const BASE_URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = 'me';
  auth_token: string;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(data): Observable<any> {
    return this.httpClient.post<any>(`${BASE_URL}/signin`, data);
  }

  loggedIn() {
    return !!localStorage.getItem('auth_token');
  }

  currentUser() {
    return localStorage.getItem('user');
  }

  logout() {
    // localStorage.removeItem('auth_token');
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

  // getEnquiry(enquiryId): Observable<any> {
  //   return this.httpClient.get<Enquiry>(`${BASE_URL}/enquiry/${enquiryId}`);
  // }
}
