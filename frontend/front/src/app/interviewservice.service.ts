import { Injectable } from '@angular/core';

import {Format} from './format';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as Rx from "rxjs/Rx";

import { from,throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterviewserviceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  postVal(firstName : string) : Observable <any> {

    return this.httpClient.post('http://localhost:5000/', {firstName});
    
  }
  
}
