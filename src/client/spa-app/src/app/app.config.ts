import { InjectionToken } from '@angular/core';

export class AppConfig {
    apiEndpoint: string;
    clientId: string;
    resource: string;
    tenantId: string;   
    redirectUri: string;
}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config')