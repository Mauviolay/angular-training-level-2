import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StockTrackingService {
  private readonly TRACKINGS_KEY = "trackings";

  trackings: string[]; // TODO : Utiliser des Observables

  constructor() {
    let trackingsFromStorage = JSON.parse(localStorage.getItem(this.TRACKINGS_KEY)) as string[];
    this.trackings = trackingsFromStorage || [];
    console.log("Construction of a new StockTrackingService " + localStorage.getItem(this.TRACKINGS_KEY));
  }

  readTrackings(): string[] {
    return this.trackings;
  }

  createTracking(tracking: string): void {
    if (!this.trackings.includes(tracking)) {
      this.trackings.push(tracking);
      localStorage.setItem(this.TRACKINGS_KEY, JSON.stringify(this.trackings));
    }
  }

  deleteTracking(tracking: string): void {
    if (this.trackings.includes(tracking)) {
      let trackingIndex = this.trackings.indexOf(tracking);
      this.trackings.splice(trackingIndex, 1);
    }
  }
}
