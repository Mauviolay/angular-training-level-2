import { Component, Input, OnInit } from "@angular/core";
import { Stock } from "../../../core/models/stock";
import { ShowStocksService } from "../../../core/services/show-stocks.service";
import { Company } from "../../../core/models/company";

@Component({
  selector: "app-stock",
  templateUrl: "./stock.component.html"
})
export class StockComponent implements OnInit {
  @Input() tracking: Company;

  stock!: Stock;
  loaded = false;

  constructor(private showStocksService: ShowStocksService) {
  }

  ngOnInit(): void {
  this.showStocksService.getStockFromSymbol(this.tracking.symbol)
    .subscribe(value => {
      this.loaded = true;
      this.stock = value;
    });
  }
}
