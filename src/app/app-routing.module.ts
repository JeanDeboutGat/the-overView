import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import {BlogsComponent} from "./blogs/blogs.component";
import {BlogDetailsComponent} from "./blogs/blog-details/blog-details.component";
import {FeedbackComponent} from "./feedback/feedback.component";

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'feedback', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
