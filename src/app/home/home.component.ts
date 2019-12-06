import { Component, OnInit } from '@angular/core';
import { MonServiceService } from '../service/mon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
etat:boolean;
  constructor(private monSercive:MonServiceService) { }

  ngOnInit() {
    this.etat=this.monSercive.addForm;
  }

}
