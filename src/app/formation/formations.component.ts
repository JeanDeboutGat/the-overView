import { Component, OnInit } from '@angular/core';

interface Formation {
  title: string;
  logo: string;
  content: string;
  duration: string;
  durationLogo: string;
}

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
  formations: Formation[] = [];

  constructor() {}

  ngOnInit(): void {
    let formation: Formation = {
      title: 'Basic concepts of angular',
      logo: 'courseLogo',
      content:
        '<p>Angular is a javascript framework that </p> <p> allows you to create single-page web </p> <p> applications. We will discover how to </p><p> create the user web interface using</p> <p> components, templates, directives...</p>',
      durationLogo: 'timeLogo',
      duration: '10min',
    };

    for (let i = 0; i < 20; i++) {
      this.formations.push(formation);
    }
    console.log(this.formations);
  }
}
