import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { AdvancedGridComponent } from './advanced-grid/advanced-grid.component';
import { LazyloadingWithFilterComponent } from './lazyloading-with-filter/lazyloading-with-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    AdvancedGridComponent,
    LazyloadingWithFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
