import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-summary',
  templateUrl: './blog-summary.component.html',
  styleUrls: ['./blog-summary.component.scss'],
})

export class BlogSummaryComponent implements OnInit, AfterViewChecked {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public image!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.title)
  }
  ngAfterViewChecked() {
    console.log('hero', this.description)
  }
}
