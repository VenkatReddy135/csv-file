import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CSVComponent } from './csv/csv.component';
import { TableDataComponent } from './table-data/table-data.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    CSVComponent,
    TableDataComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
