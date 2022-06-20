import { Component, OnInit } from "@angular/core";
import { StockTrackingService } from "../stock-tracking.service";

@Component({
  selector: 'app-show-stocks',
  templateUrl: './show-stocks.component.html',
  styleUrls: ['./show-stocks.component.css']
})
export class ShowStocksComponent implements OnInit {
  trackings: string[] = [];
  constructor(private stockTrackingService: StockTrackingService) { }

  trackByTracking(_index:number, tracking: string): string {
    return tracking;
  }

  ngOnInit(): void {
    this.trackings = this.stockTrackingService.readTrackings();
  }

  deleteTracking(tracking: string) {
    this.stockTrackingService.deleteTracking(tracking);
  }
}
