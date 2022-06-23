import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class FinnHubInterceptor implements HttpInterceptor {

  private readonly API_KEY = "bu4f8kn48v6uehqi3cqg";

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Finnhub-Token": this.API_KEY
    });

    return next.handle(httpRequest.clone({headers}));
  }
}