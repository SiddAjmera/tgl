import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { TabMenuModule } from 'primeng/tabmenu';
import { TimelineModule } from 'primeng/timeline';

import { ActiveJobsComponent } from './pages/active-jobs/active-jobs.component';
import { ClosedJobsComponent } from './pages/closed-jobs/closed-jobs.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobListItemComponent } from './components/job-list-item/job-list-item.component';
import { JobsService } from './services/jobs/jobs.service';
import { MyJobsComponent } from './my-jobs.component';
import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { JobListItemSkeletonComponent } from './components/job-list-item-skeleton/job-list-item-skeleton.component';
import { FilterAndSortComponent } from './components/filter-and-sort/filter-and-sort.component';
import { JobTypeLogoPipe } from './pipes/job-type-logo/job-type-logo.pipe';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

@NgModule({
  declarations: [
    ActiveJobsComponent,
    ClosedJobsComponent,
    JobListComponent,
    JobListItemComponent,
    MyJobsComponent,
    JobListItemSkeletonComponent,
    FilterAndSortComponent,
    JobTypeLogoPipe,
    JobDetailsComponent,
  ],
  imports: [
    AutoCompleteModule,
    ButtonModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    MyJobsRoutingModule,
    SkeletonModule,
    TabMenuModule,
    TimelineModule,
  ],
  providers: [JobsService],
})
export class MyJobsModule {}
