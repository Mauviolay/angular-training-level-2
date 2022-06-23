import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { mapToSentiments, ResultSentimentApi, Sentiment } from "../models/sentiment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class DisplaySentimentService {

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
  }

  readSentiments(symbol: string): Observable<Sentiment[]> {
    let today = new Date();
    let threeMonthBefore = new Date(today.getFullYear(), today.getMonth() - 2);
    let params = new HttpParams()
      .set("symbol", symbol)
      .set("to", this.datePipe.transform(today, "yyyy-MM-dd"))
      .set("from", this.datePipe.transform(threeMonthBefore, "yyyy-MM-01"));

    return this.httpClient.get("/api/v1/stock/insider-sentiment", { params })
      .pipe(tap(value => console.log(value)),
        map((resultSentimentApi: ResultSentimentApi) => mapToSentiments(resultSentimentApi.data)));
  }
}