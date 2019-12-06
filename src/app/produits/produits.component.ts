import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../service/mon-service.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:any[];
    constructor(private monService:MonServiceService) { }

  ngOnInit() {
    this.produits=this.monService.produits;
  }
remove(ref:string){
  this.monService.supprimer(ref);
}


}
