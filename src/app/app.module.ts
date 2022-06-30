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
import { FormationsComponent } from './formation/formations.component';
import { FormationComponent } from './formation/formation/formation.component';
import { SafeHtmlPipe } from './home/safe-html.pipe';

const appRoutes: Routes = [   {path:"", component: NavigationBarComponent}]

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, HomeComponent, FormationsComponent, FormationComponent, SafeHtmlPipe],
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
