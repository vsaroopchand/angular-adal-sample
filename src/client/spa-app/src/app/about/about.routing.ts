import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const routes = RouterModule.forChild([{
    path: 'about',
    component: HomeComponent
}])