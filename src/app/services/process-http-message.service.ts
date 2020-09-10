import { Injectable } from '@angular/core';

import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpMessageService {

  constructor() { }

  public handleError(error : HttpErrorResponse | any ){
    let errmsg : string;

    // error on client side
    if(error.error instanceof ErrorEvent){
      errmsg = error.error.message;
    }

    // error on server side , - is not minus , || is or i.e '' if no statusText present , error.error is whole error
    else {
      errmsg = `${error.status}- ${error.statusText || ''} ${error.error} `;
    }

    return throwError(errmsg);
  }
}
