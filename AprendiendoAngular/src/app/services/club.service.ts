import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Club } from '../models/club';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  url : string = "https://localhost:44336/api/Club";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  save(c : Club) : Observable<any> {
    let clubBody = JSON.stringify(c);    
    if(c.idClub === undefined){      
      return this.http.post<any>(this.url, clubBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, clubBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Club> {
    return this.http.get<Club>(this.url + "/" + id, this.httpOptions);
  } 

  delete(c: Club) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + c.idClub, 
      this.httpOptions);
  }

  list(): Observable<Club[]> {
    return this.http.get<Club[]>(this.url, this.httpOptions);
  }
}
