import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG } from './app.config';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

import { AccessdeniedModule } from './accessdenied/accessdenied.module';
import { FrameRedirectModule } from './frameredirect/frameredirect.module';

import { ValuesModule } from './values/values.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ValuesModule,
    AboutModule,
    AccessdeniedModule,
    FrameRedirectModule
  ],
  providers: [
    {
      provide: APP_CONFIG, useValue: { 
        apiEndpoint: 'https://localhost:44340',             // WebAPI endpoint for Values
        clientId: '00000000-0000-0000-0000-000000000000',   // ClientID from AAD Client-App
        tenantId: '00000000-0000-0000-0000-000000000000',   // AAD TenantID
        resource: '00000000-0000-0000-0000-000000000000',   // ClientID from AAD Server-App
        redirectUri: 'http://localhost:4200/frameredirect', // AAD Client-App's RedirectUri
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
