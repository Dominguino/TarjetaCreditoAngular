import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myAppUrl = 'https://localhost:5001/'; 
  private myApiUrl = 'api/Tarjeta/'; 

  constructor(private http: HttpClient) { }

  getListTarjetas(): Observable<any> {
    return this.http.get(this.myAppUrl+this.myApiUrl);
  }
}
