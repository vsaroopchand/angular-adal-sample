import { BaseHttpService } from "../../common/basehttp.service";
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG, AppConfig } from "../../app.config";

@Injectable()
export class ValueService extends BaseHttpService<string[]>{
    constructor(httpClient: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
        super(httpClient, config.apiEndpoint, 'values');                                     
    }
}