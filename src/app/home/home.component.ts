import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  titleText!: string;
  descriptionText!: string;
  buttonText!: { login: string; signup: string };

  constructor() {}

  ngOnInit(): void {
    this.titleText = "<p>Learn New Skills</p>"
    this.descriptionText = "<p>Discover various IT concepts, keep up</p> <p>with technology, share your ideas and </p> <p>questions with the community.</p>"
    this.buttonText ={login:"Log in", signup:"Sign up"}
  }
}
