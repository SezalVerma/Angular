import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

// observables
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

/* 
  getDishes(): Dish[] {
      return DISHES;
  }

  getDish(id : string): Dish {
    // filter returns all elements of array that follow the given condition
    // filters the array n return type array - so [index needed] , as we gotta get vonly one ans in array , use [0]
    return DISHES.filter((dish)=>(dish.id===id))[0];
  }

  getFeaturedDish(): Dish{
    // return dish for which featured boolean property is set to true
    return DISHES.filter((dish)=>(dish.featured))[0];
  } */

/*                                         Promises

  getDishes(): Promise<Dish[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES), 2000);
    });
  }
                                              
  getDish(id: string): Promise<Dish> {
    return new Promise(resolve=>{setTimeout(()=>resolve(DISHES.filter((dish) => (dish.id === id))[0]) , 2000);
  }); }

  getFeaturedDish(): Promise <Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]),2000); })  ;
   }
*/

   getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay (2000));
    }
  
 
  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    }

  getFeaturedDish(): Observable <Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000))  ;
   }
 }