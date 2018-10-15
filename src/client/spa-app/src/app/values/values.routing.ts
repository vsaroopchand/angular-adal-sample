import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AdalAccessGuard } from "../shared/guards/adal-access.guard";

export const routes = RouterModule.forChild([
    {
        path: 'values',
        component: HomeComponent,
        canActivate : [AdalAccessGuard]
    }
])