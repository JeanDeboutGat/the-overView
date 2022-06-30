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
    this.titleText = "<p style='font-size: 3rem'>Learn New Skills</p>";
    this.descriptionText =
      "<p style='font-size: 1.5rem'>Discover various IT concepts, keep up</p> <p style='font-size: 1.5rem'>with technology, share your ideas and </p> <p style='font-size: 1.5rem'>questions with the community.</p>";
    this.buttonText = {
      login: "<p style='font-size: 1.5rem; color: white'>Login</p>",
      signup: "<p style='font-size: 1.5rem; color: #3f51b5'>Sign in</p>"
    };
  }
}
