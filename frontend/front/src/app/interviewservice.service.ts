

import * as Rx from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Format } from './format';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Result } from './result';



@Injectable({
  providedIn: 'root'
})
export class InterviewserviceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  postVal(firstName : string) : Observable <any> {

    return this.httpClient.post('http://localhost:5000/', {firstName});
     }


       getResults() : Observable<Result[]> {
    return this.httpClient.get<Result[]>('http://localhost:5000', {headers: this.headers});
}
}


