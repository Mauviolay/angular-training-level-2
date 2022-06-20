import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddTrackingComponent } from "./stock-tracking/add-tracking/add-tracking.component";
import { ShowStocksComponent } from "./stock-tracking/show-stocks/show-stocks.component";
import { SentimentsDisplayerComponent } from "./sentiments-displayer/sentiments-displayer.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { StockTrackingComponent } from './stock-tracking/stock-tracking.component';
import { SentimentComponent } from './sentiments-displayer/sentiment/sentiment.component';
import { CurrentTrendComponent } from './shared/current-trend/current-trend.component';
import { StockComponent } from './stock-tracking/show-stocks/stock/stock.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule],
  declarations: [AppComponent,
    AddTrackingComponent,
    ShowStocksComponent,
    SentimentsDisplayerComponent,
    StockTrackingComponent,
    SentimentComponent,
    CurrentTrendComponent,
    StockComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
