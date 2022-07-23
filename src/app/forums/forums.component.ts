import { Component, OnInit } from '@angular/core';
import { Forum } from './forums.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss'],
})
export class ForumsComponent implements OnInit {
  forums: Forum[] = [];
  subjects: string[] = [];
  technologyFilter: string = 'all';

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.forums.push({
        title:
          i % 2 == 0
            ? 'Why overrides in package.json does not work?'
            : 'How java is an object oriented programming?',
        description:
          "<p>Is there a way to override package.json scripts? I can't change package.json because it will </p>" +
          '<p> change it for everyone. i.e in our package we have</p>',
        technologies: i % 2 == 0 ? ['nodejs', 'angular'] : ['nestjs', 'java'],
        likes: 5,
        feedbacksNumber: 5,
        date: new Date(),
      });
    }
    this.subjects.push('angular', 'nodejs', 'nestjs', 'java', 'reactjs');
  }

  verifyFilterCondition(technologies: string[]): boolean {
    if (this.technologyFilter == 'all') {
      return true;
    }
    return technologies.some((technology) => {
      return technology == this.technologyFilter;
    });
  }

  setTechnologyFilter(technology: string) {
    this.technologyFilter = technology;
  }
}
