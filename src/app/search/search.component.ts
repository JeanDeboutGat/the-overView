import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ForumsService } from '../forums/forums.service';
import { BlogsService } from '../blogs/blogs.service';

export class OptionContent {
  title!: string;
  path!: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  optionsContents: OptionContent[] = [];
  filteredOptions!: Observable<OptionContent[]>;

  constructor(
    private readonly forumsService: ForumsService,
    private readonly blogService: BlogsService
  ) {}

  ngOnInit(): void {
    this.forumsService.forums.forEach((forum, index) => {
      this.optionsContents.push({
        title: forum.title,
        path: '/forum/' + index,
      });
    });

    this.blogService.blogs.forEach((blog, index) => {
      this.optionsContents.push({
        title: blog.title,
        path: '/blog/' + index,
      });
    });

    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this.filter(value);
      })
    );
  }

  private filter(value: string): OptionContent[] {
    console.log(value)
    if (!value) {
      return [];
    }
    return this.optionsContents.filter((option) =>
      option.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}
