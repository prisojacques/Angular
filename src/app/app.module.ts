import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {TreeModule} from "primeng/tree";
import {TreeTableModule} from "primeng/treetable";
import { TreeComponent } from './tree/tree.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TreeModule,
    FormsModule,
    TreeTableModule,
    HttpClientModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
