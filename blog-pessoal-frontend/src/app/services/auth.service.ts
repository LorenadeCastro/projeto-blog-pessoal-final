import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/usuarios/logar';

  constructor(private http: HttpClient) {}

  login(credentials: AuthModel): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
}
