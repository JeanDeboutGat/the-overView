import { Component, OnInit } from '@angular/core';
import { Blog, BlogsService } from '../../blogs/blogs.service';
import { ActivatedRoute } from '@angular/router';
import { ForumDetails, ForumsService } from '../forums.service';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.scss'],
})
export class ForumDetailsComponent implements OnInit {
  public forum!: ForumDetails;

  constructor(private service: ForumsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.forum = this.service.forums[params['id']];
    });
  }
}
