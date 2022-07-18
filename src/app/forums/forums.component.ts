import { Component, OnInit } from '@angular/core';

interface Forum {
  title: string;
  description: string;
  image?: string; //TODO CHANGE TO OBLIGATORY
  technologies: string[];
  likes: number;
  feedbacksNumber: number;
  date: string;
}

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss'],
})
export class ForumsComponent implements OnInit {
  forums: Forum[] = [];
  subjects: string[] = [];

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.forums.push({
        title: 'Why overrides in package.json does not work?',
        description:
          "<p>Is there a way to override package.json scripts? I can't change package.json because it will </p>" +
          '<p> change it for everyone. i.e in our package we have</p>',
        technologies: ['node', 'angular'],
        likes: 5,
        feedbacksNumber: 5,
        date: new Date().toLocaleTimeString(),
      });
    }
    this.subjects.push('angular','nodejs','nestjs','java','reactjs');
  }
}
