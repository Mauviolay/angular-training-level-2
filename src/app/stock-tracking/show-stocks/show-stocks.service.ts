import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, tap } from "rxjs";
import { Stock } from "../../core/models/stock";

@Injectable({
  providedIn: 'root'
})
export class ShowStocksService {
  private readonly API_KEY = 'bu4f8kn48v6uehqi3cqg';

  constructor(private httpClient: HttpClient) { }

  getStockFromSymbol(symbol: string): Observable<Stock>{
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'X-Finnhub-Token': this.API_KEY
    });
    let options = { headers };
    this.httpClient.get("/api/v1/quote?symbol=" + symbol, options)
      .subscribe(value => console.log(value));

    return of({symbol});
  }

}
