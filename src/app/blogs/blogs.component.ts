import { Component, OnInit } from '@angular/core';
import { Blog, BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  blogs!: Blog[];

  constructor(private service: BlogsService) {
    this.blogs = this.service.blogs;
  }
}
