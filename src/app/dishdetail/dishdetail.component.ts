import { Component, OnInit , ViewChild
// Input    -- imported for declaring input decorator for a variable
        } from '@angular/core';

// Location - service that provides past history rendering and current page
import {Location } from '@angular/common';

// ActivatedRoute - service that provide info abt active route (in browser)
import {Params, ActivatedRoute} from '@angular/router';

import {Dish} from '../shared/dish';
import { DishService } from '../services/dish.service';
import {Comment} from '../shared/Comment';


import { switchMap } from 'rxjs/operators';


// reactive forms
import{FormBuilder , FormGroup , Validators, FormGroupDirective} from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';




@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
 
  // 'dish' would be supplied as input to dishdetail's template (wherever <app-dishdetail> is mentioned ie in menu's template).
//   @Input()
    dish :  Dish;

    reviewForm : FormGroup;
    review : Comment;

    formErrors={
      'author': '',
      'comment': ''
    }
    ValidationMessages={
      'author': {
        'required': 'Name is mandatory',
        'minlength': 'Name should be of more than 1 character'
      },
      'comment':{
        'required': 'Feedback is required'
      }
    }


    @ViewChild(FormGroupDirective)  FormGroupDirective;


    dishIds: string[];
    prev: string;
    next: string;

  constructor(
      private dishService : DishService,
      private location : Location,
      private route : ActivatedRoute,
      private fb : FormBuilder  
  ) {
      this.createForm();
   }

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

  createForm(){
    

    this.reviewForm = this.fb.group({
      rating: 5,
      comment : ['', Validators.required],
      author : ['' , [Validators.required , Validators.minLength(2)]],
      date : ''
    })
    this.reviewForm.valueChanges.
     subscribe((data)=>this.onValueChanged(data));

     this.onValueChanged();
  }

  onValueChanged(data?:any){

    if (!this.reviewForm) {return;}

    const form = this.reviewForm;

    for (const field in this.formErrors){

      if(this.formErrors.hasOwnProperty(field)){
        this.formErrors[field]='';
        const control = form.get(field);

        if (control && control.dirty && !control.valid){
           const messages = this.ValidationMessages[field];

           for (const key in control.errors){

             if(control.errors.hasOwnProperty(key)){
               this.formErrors[field] += messages[key]+ '';
             }
           }
        }
      }
    }
  }

  onSubmit(){
    this.review = this.reviewForm.value;
    const date = new Date();
    this.review.date = date.toISOString();
    this.dish.comments.push(this.review);
    
    this.reviewForm.reset({
      rating:5,
      comment: '',
      author : '',
      date : ''
    })
    // this.FormGroupDirective.resetForm()
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
