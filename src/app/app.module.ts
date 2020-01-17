import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { FilterListPipe } from './filter-list.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FilterListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DateValueAccessorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
