import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModifierComponent } from './modifier/modifier.component';


const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: ModifierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
