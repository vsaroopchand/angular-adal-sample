import { Component, OnInit } from '@angular/core';
import { AdalService } from '../../../shared/services/adal.service';

@Component({
  selector: '[app-nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private adalService: AdalService) { }

  ngOnInit() {
  }

  signInOut(){
    if (!this.adalService.isAuthenticated) {
      this.adalService.login();
    } else {
      if (this.userName) {
        this.adalService.logout();
      }  
    }
  }

  get userName() {
    if (this.adalService.userInfo) {
      return this.adalService.userInfo.userName;
    } else {
      return null;
    }
  }
}
