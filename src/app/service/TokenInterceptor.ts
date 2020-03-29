import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

// ==================== TOKEN INTERCEPTOR  =================
/*
* To insert the token in the header of our http requests
* */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // -------------------------------------------------------
  constructor() {}
  // -------------------------------------------------------
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // obtain the tpken
    const userToken: any =  sessionStorage.getItem('portfolioToken');
    let Token = '';
    if (
      // verified the token is not empty to add it
      userToken
    ) {
      Token = userToken;
      request = request.clone({
        setHeaders: {
          Authorization: ('Bearer ' + Token)
        }
      });
    } else {
      request = request.clone({
      });
    }
    return next.handle(request);
  }
}
