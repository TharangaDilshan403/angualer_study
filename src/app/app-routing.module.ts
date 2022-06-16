import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./view/about/about.component";
import {ContactUsComponent} from "./view/contact-us/contact-us.component";
import {HomeComponent} from "./view/home/home.component";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
