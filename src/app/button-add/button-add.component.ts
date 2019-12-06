import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../service/mon-service.service';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {

  constructor(private monService:MonServiceService) { }

  ngOnInit() {
  }
 afficher(){
  this.monService.affichher();
 }

}
