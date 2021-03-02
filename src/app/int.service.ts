import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Format } from './format';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as Rx from "rxjs/Rx";


@Injectable({
  providedIn: 'root'
})
export class IntService {

  
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient ) {}
  postVal(firstName:string) : Observable <any> {
    return this.httpClient.post<Format[]>('http://localhost:5000', {firstName});
  }

  
}