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
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FormationComponent } from './formation/formation.component';
import { FormationCardComponent } from './formation/formation-card/formation-card.component';

const appRoutes: Routes = [   {path:"", component: NavigationBarComponent}]

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, HomeComponent, FormationComponent, FormationCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    AppRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
