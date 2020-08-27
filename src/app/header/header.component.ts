import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';

// to open login component as dialog
import{MatDialog , MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public dialog : MatDialog) { }

  ngOnInit() {
    
  }
  
  // when openloginform() is invoked ,dialog box opens which configures the login component view
  openLoginForm(){
    this.dialog.open(LoginComponent , {height: "500px" , width:"450px"});
  }

}
