import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

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

  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
