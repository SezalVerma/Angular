import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import { PROMOTIONS} from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[] >{
    return new Promise (resolve=>{
      setTimeout(()=>resolve(PROMOTIONS),2000); })
   }

 getPromotion(id : string): Promise<Promotion >{
  // filter returns all elements of array that follow the given condition
  // filters the array n return type array - so [index needed] , as we gotta get vonly one ans in array , use [0]
  return new Promise(resolve=>{
    setImmediate(()=>resolve(PROMOTIONS.filter((promo)=>(promo.id===id))[0]),2000); })
}

getFeaturedPromotion(): Promise<Promotion>{
  // return promotion for which featured boolean property is set to true
  return new Promise (resolve=>{
    setTimeout(()=>resolve(PROMOTIONS.filter((promo)=>(promo.featured))[0]),2000); })
}

  


}
