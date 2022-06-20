import { Component, OnInit } from "@angular/core";
import { StockTrackingService } from "../stock-tracking.service";

@Component({
  selector: "app-add-tracking",
  templateUrl: "./add-tracking.component.html",
  styleUrls: ["./add-tracking.component.css"]
})
export class AddTrackingComponent implements OnInit {
  symbol = '';

  constructor(private stockTrackingService: StockTrackingService) {
  }

  ngOnInit(): void {
  }

  addTracking() {
    console.log(this.symbol);
    this.stockTrackingService.createTracking(this.symbol);
    this.symbol = '';
  }
}
