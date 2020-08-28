import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import { PROMOTIONS} from '../shared/promotions';


// observables
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[] >{
    return of(PROMOTIONS).pipe(delay(2000))
   }

 getPromotion(id : string): Observable<Promotion >{
  // filter returns all elements of array that follow the given condition
  // filters the array n return type array - so [index needed] , as we gotta get vonly one ans in array , use [0]
  return of(PROMOTIONS.filter((promo)=>(promo.id===id))[0]).pipe(delay(2000))
}

getFeaturedPromotion(): Observable<Promotion>{
  // return promotion for which featured boolean property is set to true
  return of(PROMOTIONS.filter((promo)=>(promo.featured))[0]).pipe(delay(2000))
}

  


}
