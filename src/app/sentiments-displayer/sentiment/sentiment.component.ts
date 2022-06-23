import { Component, Input } from "@angular/core";
import { Sentiment } from "../../core/models/sentiment";

@Component({
  selector: "app-sentiment",
  templateUrl: "./sentiment.component.html",
  styleUrls: ["./sentiment.component.css"]
})
export class SentimentComponent {
  @Input() sentiment: Sentiment;

}
