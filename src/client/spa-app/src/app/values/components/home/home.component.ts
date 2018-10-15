import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/value.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  values : any = [];
  constructor(private valueService: ValueService) {}

  ngOnInit() {
    this.values = this.valueService.getAll();
  }  
}
