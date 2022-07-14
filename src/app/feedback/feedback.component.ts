import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

export interface FeedBack {
  name: string;
  message: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  @Input() feedbacks?: FeedBack[];

  name = new FormControl('', Validators.required);
  newFeedback = new FormControl('', Validators.required);
  feedbackForm = this.formBuilder.group({
    name: this.name,
    newFeedback: this.newFeedback,
  });

  constructor(private formBuilder: FormBuilder) {}
}
