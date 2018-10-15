import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { routes } from './values.routing';
import { ValueService } from './services/value.service';

@NgModule({
  imports: [
    CommonModule,
    routes
  ],
  declarations: [HomeComponent],
  providers: [ValueService]
})
export class ValuesModule { }
