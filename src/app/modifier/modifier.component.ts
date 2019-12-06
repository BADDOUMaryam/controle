import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../service/mon-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Produit } from '../classes/produit';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  constructor(private monService:MonServiceService,private routActivee:ActivatedRoute,private route:Router) { }
reference:string;
desig:string;
code:string;
prix:number;
qnt:number;
  ngOnInit() {
 
      const idp = this.routActivee.snapshot.params['id'];
      this.reference=this.monService.findByRef(idp).reference;
      this.desig=this.monService.findByRef(idp).designation;
      this.code=this.monService.findByRef(idp).codeFournisseur;
      this.prix=this.monService.findByRef(idp).prixUnitaire;
      this.qnt=this.monService.findByRef(idp).quantite;
     

  }

  modifier(){
    var p:Produit={
      reference:this.reference,
      designation:this.desig,
      codeFournisseur:this.code,
      prixUnitaire:this.prix,
      quantite:this.qnt
    }
    this.monService.modifier(p);
    this.route.navigateByUrl("/home");
  }


}
