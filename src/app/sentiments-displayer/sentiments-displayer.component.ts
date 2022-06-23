import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StockTrackingService } from "../core/services/stock-tracking.service";
import { Company } from "../core/models/company";
import { DisplaySentimentService } from "../core/services/display-sentiment.service";
import { Sentiment } from "../core/models/sentiment";

@Component({
  selector: "app-sentiment-displayer",
  templateUrl: "./sentiments-displayer.component.html",
  styleUrls: ["./sentiments-displayer.component.css"]
})
export class SentimentsDisplayerComponent implements OnInit {
  tracking: Company;
  sentiments: Sentiment[];

  constructor(private activatedroute: ActivatedRoute,
              private stockTrackingService: StockTrackingService,
              private displaySentimentService: DisplaySentimentService) {
  }

  ngOnInit(): void {
    let symbol = this.activatedroute.snapshot.paramMap.get("symbol");
    this.tracking = this.stockTrackingService.getTrackingBySymbol(symbol);
    this.displaySentimentService.readSentiments(symbol).subscribe(sentiments => this.sentiments = sentiments );
  }

}
