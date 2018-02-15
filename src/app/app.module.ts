import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './SearchService';
import { SearchresultComponent } from './components/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
