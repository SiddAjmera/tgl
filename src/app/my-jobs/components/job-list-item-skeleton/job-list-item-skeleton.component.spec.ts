import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListItemSkeletonComponent } from './job-list-item-skeleton.component';

describe('JobListItemSkeletonComponent', () => {
  let component: JobListItemSkeletonComponent;
  let fixture: ComponentFixture<JobListItemSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListItemSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListItemSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
