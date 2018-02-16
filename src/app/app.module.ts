import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './SearchService';
import { SearchresultComponent } from './components/searchresult.component';
import { SavedsearchComponent } from './components/savedsearch.component';


const ROUTES: Routes = [
  { path: "",component: SearchComponent},
  { path: "search",component: SearchComponent},
  { path: "saved", component: SavedsearchComponent},
  { path: "**", redirectTo:'/',pathMatch:'full'},


];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchresultComponent,
    SavedsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
