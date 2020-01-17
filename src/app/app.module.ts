import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { FilterListPipe } from './filter-list.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DateValueAccessorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
