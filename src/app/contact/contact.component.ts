import { Component, OnInit , ViewChild } from '@angular/core';

// reactive forms
import{FormBuilder , FormGroup , Validators} from '@angular/forms';
import {Feedback , ContactType} from '../shared/feedback';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import {flyInOut} from '../animations/app-animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host : {
    '[@flyInOut]' :' true',
    'style' : 'display : block'
  },
  animations: [ flyInOut()]
})
export class ContactComponent implements OnInit {

  // form-model that would host the reactive form 
  feedbackForm : FormGroup;
  // data-model
  feedback : Feedback;

  contactType = ContactType;

  // to ensure form is completely reset to initial values after submition
  @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

  constructor( private fb : FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    // pattern n email defined in its template where its form field exist
    this.feedbackForm = this.fb.group({
        firstname : ['' , [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        lastname : ['' , [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        telnum : [0 , [Validators.required, Validators.pattern]],
        email : ['' , [Validators.required, Validators.email]],
        agree :  false,
        contacttype : 'none',
        message : ''
    });
    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();                            // reset validation messages now

   // this.feedbackFormDirective.resetForm();
   //this.feedbackFormDirective.resetForm();
  }

  onValueChanged(data?: any) {
    // if form not created yet
    if (!this.feedbackForm) { return; }

    const form = this.feedbackForm;

    // field - contains all values for different vars
    for (const field in this.formErrors) {

      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';

        // get all errors with 'field
        const control = form.get(field);

        // if field touched n invalid
        if (control && control.dirty && !control.valid) {

          const messages = this.validationMessages[field];
          
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
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
