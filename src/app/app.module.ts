import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { PriceComponent } from './price/price.component'
import { HttpClientModule } from '@angular/common/http';
import { InitialDatesCellComponent } from './initial-dates-cell/initial-dates-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    InitialDatesCellComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AgGridModule.withComponents([PriceComponent, InitialDatesCellComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
