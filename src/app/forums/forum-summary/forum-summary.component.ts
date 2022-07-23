import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-forum-summary',
  templateUrl: './forum-summary.component.html',
  styleUrls: ['./forum-summary.component.scss'],
})
export class ForumSummaryComponent {
  @Input() public title!: string;
  @Input() public image!: string;
  @Input() public technologies!: string[];
  @Input() public likes!: number;
  @Input() public feedbacksNumber!: number;
  @Input() public date!: Date;
  @Input() public selected!: boolean;

  @HostListener('mouseenter')
  mouseenter() {
    this.selected = true;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.selected = false;
  }
}
