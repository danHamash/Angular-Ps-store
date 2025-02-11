import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{NavBarComponent}from './components/nav-bar/nav-bar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { HomeComponent } from '../pages/home/home.component';
import { CardPricingComponent } from './components/big-card/card-pricing/card-pricing.component';
import { CardLabelComponent } from './components/big-card/card-label/card-label.component';
import { SimbleValuesPipe } from './pipes/simble-values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BigCardComponent,
    HomeComponent,
    CardPricingComponent,
    CardLabelComponent,
    SimbleValuesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
