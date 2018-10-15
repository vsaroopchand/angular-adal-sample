import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AdalService } from './shared/services/adal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Azure AD Client';

  constructor(private adalService: AdalService) {    
  }

  ngOnInit(){     
  }
}
