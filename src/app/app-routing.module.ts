import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { StockTrackingComponent } from "./stock-tracking/stock-tracking.component";
import { SentimentsDisplayerComponent } from "./sentiments-displayer/sentiments-displayer.component";


export const routes: Routes = [
  {
    path: '',
    component: StockTrackingComponent,
  },
  {
    path: 'sentiment/:symbol',
    component: SentimentsDisplayerComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    CommonModule
  ]
})
export class AppRoutingModule { }
