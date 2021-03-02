import { Injectable } from '@angular/core';

import {Format} from './format';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as Rx from "rxjs/Rx";

import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterviewserviceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  postVal(Format : any) : Observable <any> {
    return this.httpClient.post<Format[]>('http://localhost:3000/', Format)
    .pipe(catchError(this.httpmsg.handleError));
  }
  
}
