import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import {CollectionsModule} from './collections/collections.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    AppRoutingModule,
    CollectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
