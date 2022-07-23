import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationsComponent } from './formations/formations.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForumsComponent } from './forums/forums.component';
import { ForumDetailsComponent } from './forums/forum-details/forum-details.component';
import { ForumCreateComponent } from './forums/forum-create/forum-create.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'forum', component: ForumsComponent },
  { path: 'forum/:id', component: ForumDetailsComponent },
  { path: 'new/forum', component: ForumCreateComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
