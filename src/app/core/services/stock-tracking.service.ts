import { Injectable } from "@angular/core";
import { Company, mapToCompany, ResultCompanyApi } from "../models/company";
import { map, Observable, of, shareReplay } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../constants/api.constants";

@Injectable({
  providedIn: "root"
})
export class StockTrackingService {
  private readonly TRACKINGS_KEY = "trackings";
  private readonly CACHE_SIZE = 1;

  private cache$: Observable<Company[]>;

  private storedTrackings: Company[];

  constructor(private httpClient: HttpClient) {
    let trackingsFromStorage = JSON.parse(localStorage.getItem(this.TRACKINGS_KEY)) as Company[];
    this.storedTrackings = trackingsFromStorage || [];
  }

  get trackings(): Observable<Company[]> {
    if (!this.cache$) {
      this.cache$ = of(this.storedTrackings).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  getTrackingBySymbol(symbol: string): Company {
    return this.storedTrackings.find(tracking => tracking.symbol === symbol) || null;
  }

  createTracking(symbol: string): void {
    if (!this.storedTrackings.find(tracking => tracking.symbol === symbol)) {
      this.httpClient.get(API_URL + "/api/v1/search?q=" + symbol)
        .pipe(map((companies: ResultCompanyApi) => (companies.result.filter(company => company.symbol === symbol))[0]),
          map(companyApi => mapToCompany(companyApi))
        ).subscribe(company => {
          this.storedTrackings.push(company);
          localStorage.setItem(this.TRACKINGS_KEY, JSON.stringify(this.storedTrackings));
        });
    }
  }

  deleteTracking(symbol: string): void {
    let trackingToDelete = this.storedTrackings.find(tracking => tracking.symbol === symbol);
    if (trackingToDelete) {
      let trackingIndex = this.storedTrackings.indexOf(trackingToDelete);
      this.storedTrackings.splice(trackingIndex, 1);
      localStorage.setItem(this.TRACKINGS_KEY, JSON.stringify(this.storedTrackings));
    }
  }
}
