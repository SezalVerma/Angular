import { Component, OnInit } from '@angular/core';

// Dish - name of class specified in 'shared/dish'
import {Dish} from '../shared/dish';
//import {DishdetailComponent} from '../dishdetail/dishdetail.component';
import {DISHES} from '../shared/dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //                                       declare vars here

  dishes : Dish[]= DISHES;                                                  // type- Dish[]

  selectedDish :Dish ;

  constructor() { }

  ngOnInit() {
  }

  //                                    declare any other handlers 

  //  when onSelect handler is called with a specific dish , that dish would be assigned to selectedDish var 
  onSelect(dish : Dish){
    this.selectedDish = dish;                     // this.name-- name var declared in this class
  }

}
