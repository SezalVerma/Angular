import { Component, OnInit , Inject} from '@angular/core';

// Dish - name of class specified in 'shared/dish'
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {flyInOut, expand} from '../animations/app-animation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // host - flyinout will be rendered when this page host is rendered
  host : {
    '[@flyInOut]' :' true',
    'style' : 'display : block'
  },
  animations: [ flyInOut(), expand()]
})
export class MenuComponent implements OnInit {

  //                                       declare vars here

  dishes : Dish[];                                                  // type- Dish[]
  errmess : string;
 

  constructor(private dishService : DishService,
    @Inject('BaseURL')private BaseURL ) {
   }

  ngOnInit() {
     this.dishService.getDishes().subscribe(
      (dishes)=> this.dishes= dishes,                // if subscribe msg returns value
      errmess=> this.errmess = <any> errmess         // if subscribe throws an err , convert to string
    );

  }

  //                                    declare any other handlers 

  //  when onSelect handler is called with a specific dish , that dish would be assigned to selectedDish var 
  // onSelect(dish : Dish){
  //   this.selectedDish = dish;                     // this.name-- name var declared in this class
  //}

}
