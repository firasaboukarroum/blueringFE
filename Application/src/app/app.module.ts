import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioTableComponent } from './portfolio-table/portfolio-table.component';
import {FormsModule} from '@angular/forms';
import { NumericTextboxModule } from 'ngx-numeric-textbox';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioTableComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NumericTextboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
