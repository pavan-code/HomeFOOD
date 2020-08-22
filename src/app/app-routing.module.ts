import { ChefsComponent } from './chefs/chefs.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'cuisines', component: CuisinesComponent},
  { path: 'chefs', component: ChefsComponent },
  { path: '**',redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
