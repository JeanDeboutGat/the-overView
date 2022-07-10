import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

 @Input('title') titleText!: string;
 @Input() logo!: string;
 @Input() content!: string;
 @Input() durationLogo!: string;
 @Input() duration!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
