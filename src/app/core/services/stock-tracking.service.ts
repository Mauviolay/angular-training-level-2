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
    let trackingsFromStorage = this.exportTrackingsFromLocalStorage();
    this.storedTrackings = trackingsFromStorage || [];
  }

  get trackings(): Observable<Company[]> {
    if (!this.cache$) {
      this.cache$ = of(this.storedTrackings).pipe(shareReplay(this.CACHE_SIZE));
    }
    return this.cache$;
  }

  getTrackingBySymbol(symbol: string): Company {
    return this.storedTrackings.find(tracking => tracking.symbol === symbol) || null;
  }

  createTracking(symbol: string): void {
    if (!this.getTrackingBySymbol(symbol)) {
      const observer = {
        next: company => {
          this.storedTrackings.push(company);
          this.storeTrackingsInLocalStorage();
        },
        error: (error: Error) => console.log(error.message)
      };

      this.httpClient.get(API_URL + "/api/v1/search?q=" + symbol)
        .pipe(map((companies: ResultCompanyApi) => this.getFirstCompany(companies, symbol))
        ).subscribe(observer);
    }
  }

  deleteTracking(symbol: string): void {
    let trackingToDelete = this.storedTrackings.find(tracking => tracking.symbol === symbol);
    if (trackingToDelete) {
      let trackingIndex = this.storedTrackings.indexOf(trackingToDelete);
      this.storedTrackings.splice(trackingIndex, 1);
      this.storeTrackingsInLocalStorage();
    }
  }

  private storeTrackingsInLocalStorage() {
    localStorage.setItem(this.TRACKINGS_KEY, JSON.stringify(this.storedTrackings));
  }

  private exportTrackingsFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.TRACKINGS_KEY)) as Company[];
  }

  private getFirstCompany(companies: ResultCompanyApi, symbol: string) {
    let companiesMatching = companies.result.filter(company => company.symbol === symbol);
    if (companiesMatching.length <= 0) {
      throw new Error("No stock found for this symbol");
    }
    return mapToCompany(companiesMatching[0]);
  }
}
