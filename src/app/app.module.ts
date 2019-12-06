import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormsModule } from '@angular/forms';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ModifierComponent } from './modifier/modifier.component';
import { RechercheComponent } from './recherche/recherche.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProduitComponent,
    NavbarComponent,
    HomeComponent,
    ProduitsComponent,
    ButtonAddComponent,
    ModifierComponent,
    RechercheComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
