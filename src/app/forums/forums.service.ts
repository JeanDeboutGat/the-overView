import { Injectable } from '@angular/core';
import { FeedBack } from '../feedback/feedback.component';

export interface Forum {
  title: string;
  description: string;
  image?: string; //TODO CHANGE TO OBLIGATORY
  technologies: string[];
  likes: number;
  feedbacksNumber: number;
  date: Date;
}

export interface ForumDetails {
  title: string;
  content: string;
  image?: string; //TODO CHANGE TO OBLIGATORY
  date: string;
  feedbacks: FeedBack[];
}

@Injectable({
  providedIn: 'root',
})
export class ForumsService {
  forums: ForumDetails[] = [];

  constructor() {
    const forum = {
      title: '<p>Why overrides in package.json does not work?</p>',
      content:
        '<p>Is there a way to override package.json scripts? I can\'t change package.json because it will </p>"' +
        "<div> <p>'overides':{</p> <p>  'ansi-regex': '3.0.0'}</p> </div> +\n" +
        "'<p> change it for everyone. i.e in our package we have</p>",
      date: new Date().toDateString(),
    };
    this.forums = new Array(10).fill(forum, 0, 9);
  }
}
