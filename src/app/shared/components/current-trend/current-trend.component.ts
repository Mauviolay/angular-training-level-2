import { Component, Input } from "@angular/core";

@Component({
  selector: "app-current-trend",
  templateUrl: "./current-trend.component.html",
  styleUrls: ["./current-trend.component.css"]
})
export class CurrentTrendComponent {
  @Input() trend: number;

  isPositive() {
    return this.trend >= 0;
  }

}
