import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AdalService } from './adal.service';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { Observable } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../../app.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private adalService: AdalService, @Inject(APP_CONFIG) private config: AppConfig) {}
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return this.adalService.acquireTokenResilient(this.config.resource)
      .pipe(mergeMap((token) => {
        if (token) {
          req = req.clone({
            setHeaders: {
              Authorization: 'Bearer ' + token
            }
          });
        }
        return next.handle(req);
      }));
  }
}