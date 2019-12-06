import { Injectable } from '@angular/core';
import { Produit } from '../classes/produit';

@Injectable({
  providedIn: 'root'
})

export class MonServiceService {
  addForm:boolean=false;

  constructor() { }
  produits:Produit[]=[{
    reference:"ref1",
    quantite:12, 
    prixUnitaire:1200,
   codeFournisseur:"frns1",
   designation:"desig",
  }]

  addProduit(produit:Produit){
   this.produits.push(produit);
  }
  affichher(){
    if(this.addForm==false){
      this.addForm=true;
    }
    else if(this.addForm==true){
      this.addForm=false;
    }
  }
 
  
  hide(){
    this.addForm=false;
  }

  findByRef(ref:string){
    for(const p of this.produits)
    if(p.reference==ref) {return p; }
  }
supprimer(ref:string){
  var p:Produit=this.findByRef(ref);
  var index=this.produits.indexOf(p);
this.produits.splice(index,1);

}  
modifier(np:Produit){
var p=this.findByRef(np.reference);
p.reference=np.reference;
p.quantite=np.quantite;
p.prixUnitaire=np.prixUnitaire;
p.codeFournisseur=np.codeFournisseur;
p.designation=np.designation;

}
}

