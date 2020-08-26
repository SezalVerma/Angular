import {Routes} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import {DishdetailComponent} from '../dishdetail/dishdetail.component';

export const routes: Routes =[
    {path : 'home' , component: HomeComponent},
    {path : 'about' , component: AboutComponent},
    {path:  'menu' , component: MenuComponent},
    {path : 'contact' , component: ContactComponent},
    // if no path specified , redirect to home component with full path in bar
    {path : '', redirectTo:'/home' , pathMatch:'full'}
]