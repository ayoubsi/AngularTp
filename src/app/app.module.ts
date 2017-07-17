import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { GetCharacterComponent } from './API/get-character/get-character.component';
import { SearchFormComponent } from './API/search-form/search-form.component';
import { search } from './API/service/search';
import { FavorisComponent } from './API/favoris/favoris.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCharacterComponent,
    SearchFormComponent,
    FavorisComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [search],
  bootstrap: [AppComponent]
})
export class AppModule { }
