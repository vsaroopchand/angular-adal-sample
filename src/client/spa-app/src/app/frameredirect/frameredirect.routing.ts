import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const handleRedirectRoutes = RouterModule.forChild([{
    path: 'frameredirect',
    component: HomeComponent
}])