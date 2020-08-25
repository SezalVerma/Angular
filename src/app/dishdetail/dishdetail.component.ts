import { Component, OnInit , Input} from '@angular/core';
import {Dish} from '../shared/dish';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
 
  // 'dish' would be supplied as input to dishdetail's template (wherever <app-dishdetail> is mentioned ie in menu's template).
  @Input()
  dish :  Dish;

  constructor() { }

  ngOnInit() {
  }

}
