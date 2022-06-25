import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule, Routes} from "@angular/router";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatDividerModule} from "@angular/material/divider";

const appRoutes: Routes = [   {path:"", component: NavigationBarComponent}]

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    AppRoutingModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
