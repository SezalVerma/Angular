import { Component, OnInit } from '@angular/core';

// Dish - name of class specified in 'shared/dish'
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //                                       declare vars here

  dishes : Dish[];                                                  // type- Dish[]

  selectedDish :Dish ;

  constructor(private dishService : DishService) {
   }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();

  }

  //                                    declare any other handlers 

  //  when onSelect handler is called with a specific dish , that dish would be assigned to selectedDish var 
  onSelect(dish : Dish){
    this.selectedDish = dish;                     // this.name-- name var declared in this class
  }

}
