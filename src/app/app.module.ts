import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }   from './app.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { AddressComponent } from './address/address.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ AppComponent, AddressComponent, AuthorComponent, BookComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
