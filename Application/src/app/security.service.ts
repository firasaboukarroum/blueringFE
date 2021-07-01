import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Security} from "./security";


@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private baseUrl = 'http://localhost:8080/securities/all';
  constructor(private http: HttpClient) { }

  getSecurities(): Observable<Security[]>{
    return this.http.get<Security[]>(`${this.baseUrl}`);
  }
}
