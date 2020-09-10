import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';


// observables
import { of, Observable } from 'rxjs';
import { delay , map, catchError} from 'rxjs/operators';

// http
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {ProcessHttpMessageService} from './process-http-message.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http : HttpClient,
             private ProcessHttpMessageService : ProcessHttpMessageService )
   { }


   getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
    .pipe(catchError(this.ProcessHttpMessageService.handleError));
    }
  
 
  getDish(id: string): Observable<Dish> {
    return  this.http.get<Dish>(baseURL + 'dishes/' + id)
    .pipe(catchError(this.ProcessHttpMessageService.handleError));
    }

  getFeaturedDish(): Observable <Dish> {
    return  this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(Dishes=> Dishes[0]))
    .pipe(catchError(this.ProcessHttpMessageService.handleError));
   }

   getDishIds(): Observable <string[] | any> {
     // map operator takes each value of array n apply change to it and pass new value to array
     // here, dishes converted to ids of all dishes
     // getDishes() already converts error into simple error through handleerror called above in getDishes()
    return this.getDishes().pipe(map(Dishes=> Dishes.map(Dish=>Dish.id)))
    .pipe(catchError(error=> error));
   }
 }