import { Component, OnInit ,
// Input    -- imported for declaring input decorator for a variable
        } from '@angular/core';

// Location - service that provides past history rendering and current page
import {Location } from '@angular/common';

// ActivatedRoute - service that provide info abt active route (in browser)
import {Params, ActivatedRoute} from '@angular/router';

import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
 
  // 'dish' would be supplied as input to dishdetail's template (wherever <app-dishdetail> is mentioned ie in menu's template).
//   @Input()
    dish :  Dish;

  constructor(
      private dishService : DishService,
      private location : Location,
      private route : ActivatedRoute
  ) { }

  ngOnInit() {
    
      //   subscribing to the observable
      // getting id of active route which again in menu.html provides with current dish id
      let id = this.route.snapshot.params['id'];
       this.dishService.getDish(id).subscribe(
        (dish)=> this.dish= dish
      );
  }

  goback() : void{
      this.location.back();
  }

}
