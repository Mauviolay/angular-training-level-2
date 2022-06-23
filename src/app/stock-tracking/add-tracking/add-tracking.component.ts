import { Component } from "@angular/core";
import { StockTrackingService } from "../../core/services/stock-tracking.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-tracking",
  templateUrl: "./add-tracking.component.html",
  styleUrls: ["./add-tracking.component.css"]
})
export class AddTrackingComponent {

  constructor(private stockTrackingService: StockTrackingService) {
  }

  addTracking(contactForm: NgForm) {
    let symbol = contactForm.value.symbol;
    if (symbol) {
      this.stockTrackingService.createTracking(symbol);
      contactForm.reset();
    }
  }
}
