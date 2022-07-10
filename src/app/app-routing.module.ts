import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import {BlogsComponent} from "./blogs/blogs.component";
import {BlogDetailsComponent} from "./blogs/blog-details/blog-details.component";

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
