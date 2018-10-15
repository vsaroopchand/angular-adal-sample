import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { handleRedirectRoutes } from './frameredirect.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    handleRedirectRoutes
  ],
  declarations: [HomeComponent]
})
export class FrameRedirectModule { }
