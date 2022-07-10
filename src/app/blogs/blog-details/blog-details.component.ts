import {Component, OnInit} from '@angular/core';
import { Blog, BlogsService } from '../blogs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  public blog!: Blog;

  constructor(private service: BlogsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.blog = this.service.blogs[params['id']];
    });
  }
}
