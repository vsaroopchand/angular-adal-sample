import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdalConfigService } from './services/adal-config.service';
import { AdalAccessGuard } from './guards/adal-access.guard';
import { AdalService } from './services/adal.service';
import { HttpClientModule } from '@angular/common/http';

/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [AdalConfigService, AdalService, AdalAccessGuard, httpInterceptorProviders]
})
export class SharedModule { }
