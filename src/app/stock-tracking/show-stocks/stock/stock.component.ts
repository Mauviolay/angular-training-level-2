import { Component, Input, OnInit } from "@angular/core";
import { Stock } from "../../../core/models/stock";
import { ShowStocksService } from "../show-stocks.service";

@Component({
  selector: "app-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.css"]
})
export class StockComponent implements OnInit {
  @Input() symbol: string;

  stock!: Stock;

  constructor(private showStocksService: ShowStocksService) {
  }

  ngOnInit(): void {
  this.showStocksService.getStockFromSymbol(this.symbol)
    .subscribe(value => this.stock = value);
  }

}
