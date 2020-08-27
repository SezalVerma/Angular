import { Component, OnInit , ViewChild } from '@angular/core';

// reactive forms
import{FormBuilder , FormGroup , Validators} from '@angular/forms';
import {Feedback , ContactType} from '../shared/feedback';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // form-model that would host the reactive form 
  feedbackForm : FormGroup;
  // data-model
  feedback : Feedback;

  contactType = ContactType;

  // to ensure form is completely reset to initial values after submition
  @ViewChild('fform') feedbackFormDirective;

  constructor( private fb : FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
        firstname : ['' , Validators.required],
        lastname : ['' , Validators.required],
        telnum : [0 , Validators.required],
        email : ['' , Validators.required],
        agree :  false,
        contacttype : 'none',
        message : ''
    });
   // this.feedbackFormDirective.resetForm();
   //this.feedbackFormDirective.resetForm();
  }

  onSubmit(){

     /* both feedback n feedbackForm we declared have same strc , so we could directly map the values of all
        elements directly , otherwise each value had to be mapped individually
        value -- takes values of all vars defined in the form at once 
        reset-- empties the form 
     */
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname : '',
        lastname : '',
        telnum : 0,
        email : '',
        agree :  false,
        contacttype : 'none',
        message : ''
    });
    // this.feedbackFormDirective.resetForm();
  }
}
