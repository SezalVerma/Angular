import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [
    CommonModule,
    // forRoot takes routes as parameter ie routes to configure by RouterModule
    RouterModule.forRoot(routes)
  ],
  exports:[
    // RouterModule is now exported to app.module thagt has the app-routing module imported
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
