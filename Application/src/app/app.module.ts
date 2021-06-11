import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioTableComponent } from './portfolio-table/portfolio-table.component';
import {FormsModule} from '@angular/forms';
import { NumericTextboxModule } from 'ngx-numeric-textbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioTableComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NumericTextboxModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
