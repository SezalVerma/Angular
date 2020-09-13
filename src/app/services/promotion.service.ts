import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import { PROMOTIONS} from '../shared/promotions';
import {baseURL} from '../shared/baseurl';
import {ProcessHttpMessageService} from './process-http-message.service';
import {HttpClient  } from '@angular/common/http';

// observables
import { of, Observable } from 'rxjs';
import { delay , map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor( private http : HttpClient , 
               private ProcessHttpMessageService : ProcessHttpMessageService) { }

  getPromotions(): Observable<Promotion[] >{
    return this.http.get<Promotion[]>(baseURL +'promotions' )
     .pipe(catchError(this.ProcessHttpMessageService.handleError));
   }

 getPromotion(id : string): Observable<Promotion >{
  // filter returns all elements of array that follow the given condition
  // filters the array n return type array - so [index needed] , as we gotta get vonly one ans in array , use [0]
  // return of(PROMOTIONS.filter((promo)=>(promo.id===id))[0]).pipe(delay(2000))

  return this.http.get<Promotion>(baseURL + 'promotions/' + id)
    .pipe(catchError(this.ProcessHttpMessageService.handleError));
}

getFeaturedPromotion(): Observable<Promotion>{
  // return promotion for which featured boolean property is set to true
  return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true')
     .pipe(map(promotions=>promotions[0]))
     .pipe(catchError(this.ProcessHttpMessageService.handleError));
}

  


}
