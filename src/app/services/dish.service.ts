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


   getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay (2000));
    }
  
 
  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    }

  getFeaturedDish(): Observable <Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000))  ;
   }

   getDishIds(): Observable <string[] | any> {
     // map operator takes each value of array n apply change to it and pass new value to array
     // here, dishes converted to ids of all dishes
    return of(DISHES.map(dish=>dish.id))
   }
 }