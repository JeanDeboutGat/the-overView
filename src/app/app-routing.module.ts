import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormationComponent} from "./formation/formation.component";
import {FormationCardComponent} from "./formation/formation-card/formation-card.component";

const routes: Routes = [{ path: '', component: FormationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)]})
export class AppRoutingModule {}
