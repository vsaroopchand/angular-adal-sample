import { Injectable, Inject } from "@angular/core";
import { APP_CONFIG, AppConfig } from "../../app.config";

@Injectable()
export class AdalConfigService {

    constructor(@Inject(APP_CONFIG) private config: AppConfig) {}
    
    get adalSettings() {
        return {
            tenant: this.config.tenantId,
            clientId: this.config.clientId,
            redirectUri: this.config.redirectUri,
            postLogoutRedirectUri: window.location.origin + '/',
            navigateToLoginRequestUrl: true
        }
    }
}