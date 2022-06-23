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
import { CurrentTrendComponent } from './shared/components/current-trend/current-trend.component';
import { StockComponent } from './stock-tracking/show-stocks/stock/stock.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { FinnHubInterceptor } from "./core/interceptor/finnhub.interceptor";
import { DatePipe } from "@angular/common";

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
    StockComponent,
    SpinnerComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: FinnHubInterceptor, multi: true},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
