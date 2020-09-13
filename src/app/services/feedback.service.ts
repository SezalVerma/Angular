import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessHttpMessageService} from './process-http-message.service';
import {baseURL} from '../shared/baseurl';
import {map , catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Feedback} from '../shared/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient ,
            private ProcessHttpMessageService : ProcessHttpMessageService) 
  { }

  submitFeedback(feed) : Observable<Feedback>{
   return this.http.post<Feedback> (baseURL + 'feedback' , feed)
    .pipe(catchError(this.ProcessHttpMessageService.handleError));
  }

}
