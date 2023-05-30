import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from './owner';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url = environment.REST_API_URL + 'owners';

  constructor(private http: HttpClient) { }

  getOwnersList(): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${this.url}`);
  }

  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.url}/${id}`);
  }

  getOwnersByLastName(lastName: string): Observable<Owner[]> {
    let url = this.url + "?lastName=" + lastName;
    console.log(url);
    return this.http.get<Owner[]>(`${url}`)
  }

  updateOwner(id: number, owner: Owner): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, owner);
  }

  addNewOwner(owner: Owner): Observable<Object> {
    return this.http.post(`${this.url}`, owner);
  }
}
