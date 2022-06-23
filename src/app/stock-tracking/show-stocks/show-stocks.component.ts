import { Component, OnInit } from "@angular/core";
import { StockTrackingService } from "../../core/services/stock-tracking.service";
import { Company } from "../../core/models/company";

@Component({
  selector: 'app-show-stocks',
  templateUrl: './show-stocks.component.html',
  styleUrls: ['./show-stocks.component.css']
})
export class ShowStocksComponent implements OnInit {
  trackings: Company[] = [];
  constructor(private stockTrackingService: StockTrackingService) { }

  trackByTracking(_index:number, tracking: Company): string {
    return tracking.symbol;
  }

  ngOnInit(): void {
    this.trackings = this.stockTrackingService.readTrackings();
  }

  deleteTracking(tracking: string) {
    this.stockTrackingService.deleteTracking(tracking);
  }
}
