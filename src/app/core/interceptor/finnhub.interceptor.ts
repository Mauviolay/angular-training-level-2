import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class FinnHubInterceptor implements HttpInterceptor {

  private readonly API_KEY = "bu4f8kn48v6uehqi3cqg";

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest.clone({params: httpRequest.params.set("token", this.API_KEY)}));
  }
}