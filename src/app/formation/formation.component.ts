import { Component, OnInit } from '@angular/core';

interface FormationCard {
  title: string;
  logo: string;
  content: string;
  duration: string;
  durationLogo: string;
}

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  formationCards: FormationCard[] = [];

  constructor() {}

  ngOnInit(): void {
    let formationCard: FormationCard = {
      title: 'Basic concepts of angular',
      logo: 'courseLogo',
      content:
        '<p>Angular is a javascript framework that </p> <p> allows you to create single-page web </p> <p> applications. We will discover how to </p><p> create the user web interface using</p> <p> components, templates, directives...</p>',
      durationLogo: 'timeLogo',
      duration: '10min',
    };

    for (let i = 0; i < 20; i++) {
      this.formationCards.push(formationCard);
    }
    console.log(this.formationCards);
  }
}
