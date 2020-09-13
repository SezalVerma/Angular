import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import { _MatProgressBarMixinBase } from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ProcessHttpMessageService} from './process-http-message.service';
import {baseURL} from '../shared/baseurl';

// observables
import { of, Observable } from 'rxjs';
import { delay , map , catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http : HttpClient, 
              private ProcessHttpMessageService : ProcessHttpMessageService) { }

  getLeader(id: string): Observable<Leader>{
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
     .pipe(catchError(this.ProcessHttpMessageService.handleError)) ;
  }

  getLeaders(): Observable<Leader[]>{
    return this.http.get<Leader[]>(baseURL + 'leaders')
     .pipe(catchError(this.ProcessHttpMessageService.handleError));
  }

  getFeaturedLeader():Observable<Leader>{
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true')
     .pipe(map(leaders=>leaders[0]))
     .pipe(catchError(this.ProcessHttpMessageService.handleError));
  }
}
