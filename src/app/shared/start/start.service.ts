import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Cliente } from './model/cliente'; 

@Injectable({
  providedIn: 'root'
})
export class StartService {
  private api = environment.api;
 
 

  constructor(private http: HttpClient) {}


    gettAll(): Observable<any> {
      return this.http.get<any>(this.api);
    }

    getById(id: string): Observable<any> {
      return this.http.get<Cliente>(`${this.api}${"?idcliente="}${id}`);
    }

   
}
