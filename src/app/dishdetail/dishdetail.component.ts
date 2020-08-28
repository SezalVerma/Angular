import { Component, OnInit ,
// Input    -- imported for declaring input decorator for a variable
        } from '@angular/core';

// Location - service that provides past history rendering and current page
import {Location } from '@angular/common';

// ActivatedRoute - service that provide info abt active route (in browser)
import {Params, ActivatedRoute} from '@angular/router';

import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';

import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
 
  // 'dish' would be supplied as input to dishdetail's template (wherever <app-dishdetail> is mentioned ie in menu's template).
//   @Input()
    dish :  Dish;


  dishIds: string[];
  prev: string;
  next: string;

  constructor(
      private dishService : DishService,
      private location : Location,
      private route : ActivatedRoute
  ) { }

  ngOnInit() {
    
      //   subscribing to the observable
      // getting id of active route which again in menu.html provides with current dish id
      this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      // params - observable , any change in it will automatically subscribe the observable again
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { 
      this.dish = dish; 
      // next n prev values also changing along with current id dish
      this.setPrevNext(dish.id); }); 
  }


  setPrevNext(dishId: string) {
    
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goback() : void{
      this.location.back();
  }

}
