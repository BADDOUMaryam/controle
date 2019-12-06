import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MonServiceService } from '../service/mon-service.service';
import { Produit } from '../classes/produit';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private monService:MonServiceService) { }

  ngOnInit() {
  }
  etat:number=0;
  message:string="";
  afficher:number=0;

onSubmit(form :NgForm){
  var p:Produit={
    reference:form.value['ref'],
    designation:form.value['desig'],
    codeFournisseur:form.value['code'],
    prixUnitaire:form.value['prix'],
    quantite:form.value['qnt']
  }
 console.log(form.value['prix']);
  if(form.value['qnt']==0 || form.value['qnt']==null){
    this.etat=-1;
    this.message="quantité =0";


  }
    if(form.value['prix']==0 || form.value['prix']==null){
    this.message+=" prix=0";
    this.etat=-1;
  
  }
 else{
    
    this.monService.addProduit(p);
    this.etat=1;
    this.afficher=1;
    this.monService.hide();

  }
 

}
getEtat(){

  return this.monService.addForm;
}
}
