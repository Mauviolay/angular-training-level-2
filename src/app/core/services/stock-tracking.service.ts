import { Injectable } from "@angular/core";
import { Company, mapToCompany, ResultCompanyApi } from "../models/company";
import { map } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StockTrackingService {
  private readonly TRACKINGS_KEY = "trackings";

  trackings: Company[]; // TODO : Utiliser des Observables

  constructor(private httpClient: HttpClient) {
    let trackingsFromStorage = JSON.parse(localStorage.getItem(this.TRACKINGS_KEY)) as Company[];
    this.trackings = trackingsFromStorage || [];
  }

  readTrackings(): Company[] {
    return this.trackings;
  }

  getTrackingBySymbol(symbol: string): Company {
    return this.trackings.find(tracking => tracking.symbol === symbol) || null;
  }

  createTracking(symbol: string): void {
    if (!this.trackings.find(tracking => tracking.symbol === symbol)) {
      this.httpClient.get("/api/v1/search?q=" + symbol)
        .pipe(map((companies: ResultCompanyApi) => (companies.result.filter(company => company.symbol === symbol))[0]),
          map(companyApi => mapToCompany(companyApi))
        ).subscribe(company => {
          this.trackings.push(company);
          localStorage.setItem(this.TRACKINGS_KEY, JSON.stringify(this.trackings));
        });
    }
  }

  deleteTracking(symbol: string): void {
    let trackingToDelete = this.trackings.find(tracking => tracking.symbol === symbol);
    if (trackingToDelete) {
      let trackingIndex = this.trackings.indexOf(trackingToDelete);
      this.trackings.splice(trackingIndex, 1);
      localStorage.setItem(this.TRACKINGS_KEY, JSON.stringify(this.trackings));
    }
  }
}
