import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormationsComponent} from "./formation/formations.component";
import {FormationComponent} from "./formation/formation/formation.component";

const routes: Routes = [{ path: '', component: FormationsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)]})
export class AppRoutingModule {}
