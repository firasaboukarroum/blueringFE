import { Injectable } from '@angular/core';
import { Facility } from './facility';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
   private baseUrl = 'http://localhost:8080/facilities/all';

   constructor(private http: HttpClient) { }

  getFacilities(): Observable<Facility[]>{
    return this.http.get<Facility[]>(`${this.baseUrl}`);
  }
}
