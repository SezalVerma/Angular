import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import { PROMOTIONS} from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
   }

 getPromotion(id : string): Promotion {
  // filter returns all elements of array that follow the given condition
  // filters the array n return type array - so [index needed] , as we gotta get vonly one ans in array , use [0]
  return PROMOTIONS.filter((promo)=>(promo.id===id))[0];
}

getFeaturedPromotion(): Promotion{
  // return promotion for which featured boolean property is set to true
  return PROMOTIONS.filter((promo)=>(promo.featured))[0];
}

  


}
