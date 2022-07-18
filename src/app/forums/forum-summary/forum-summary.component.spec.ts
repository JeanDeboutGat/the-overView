import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSummaryComponent } from './forum-summary.component';

describe('ForumSummaryComponent', () => {
  let component: ForumSummaryComponent;
  let fixture: ComponentFixture<ForumSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
