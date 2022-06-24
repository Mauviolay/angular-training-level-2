import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { mapToStock, Stock, StockApi } from "../models/stock";
import { API_URL } from "../constants/api.constants";

@Injectable({
  providedIn: "root"
})
export class ShowStocksService {

  constructor(private httpClient: HttpClient) {
  }

  getStockFromSymbol(symbol: string): Observable<Stock> {
    return this.httpClient.get(API_URL + "/api/v1/quote?symbol=" + symbol)
      .pipe(map((stockApi: StockApi) => mapToStock(stockApi)));
  }
}
