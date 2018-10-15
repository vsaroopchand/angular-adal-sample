import { Component, OnInit, Inject } from '@angular/core';
import { AdalService } from '../../../shared/services/adal.service';
import { AppConfig, APP_CONFIG } from '../../../app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private adalService: AdalService, @Inject(APP_CONFIG) private config: AppConfig, private router: Router) { }
  ngOnInit() {
    this.adalService.handleWindowCallback();
    this.router.navigate(['home']);
  }
}
