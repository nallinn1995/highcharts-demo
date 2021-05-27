import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule, HIGHCHARTS_MODULES  } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as highmaps from 'highcharts/modules/map.src';
import * as  exporting from 'highcharts/modules/exporting.src';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, highmaps,exporting  ] } // add as factory to your providers

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
