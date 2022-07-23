import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forum-create',
  templateUrl: './forum-create.component.html',
  styleUrls: ['./forum-create.component.scss'],
})
export class ForumCreateComponent implements OnInit {
  name = new FormControl('', Validators.required);
  title = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  content = new FormControl('', Validators.required);

  forumCreateForm: FormGroup = this.formBuilder.group({
    name: this.name,
    title: this.title,
    category: this.category,
    content: this.category,
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
