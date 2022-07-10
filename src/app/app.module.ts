import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormationsComponent } from './formations/formations.component';
import { FormationComponent } from './formations/formation/formation.component';
import { SafeHtmlPipe } from './home/safe-html.pipe';
import { BlogsComponent } from './blogs/blogs.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BlogSummaryComponent } from './blogs/blog-summary/blog-summary.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { StyleClassPipe } from './utils/style-class-pipe';

const appRoutes: Routes = [{ path: '', component: NavigationBarComponent }];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    FormationsComponent,
    FormationComponent,
    SafeHtmlPipe,
    BlogsComponent,
    BlogSummaryComponent,
    BlogDetailsComponent,
    StyleClassPipe,
  ],
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
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
