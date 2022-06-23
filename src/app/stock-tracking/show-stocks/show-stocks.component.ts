import { Component, OnInit } from "@angular/core";
import { StockTrackingService } from "../../core/services/stock-tracking.service";
import { Company } from "../../core/models/company";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-show-stocks',
  templateUrl: './show-stocks.component.html',
  styleUrls: ['./show-stocks.component.css']
})
export class ShowStocksComponent implements OnInit {
  trackings$: Observable<Company[]>;
  constructor(private stockTrackingService: StockTrackingService) { }

  trackByTracking(_index:number, tracking: Company): string {
    return tracking.symbol;
  }

  ngOnInit(): void {
    this.trackings$ = this.stockTrackingService.trackings;
  }

  deleteTracking(tracking: string) {
    this.stockTrackingService.deleteTracking(tracking);
  }
}
