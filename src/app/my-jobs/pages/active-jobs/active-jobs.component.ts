import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { Observable } from 'rxjs';

import { Job } from './../../models/job.model';
import { JobsService } from './../../services/jobs/jobs.service';

@Component({
  selector: 'app-active-jobs',
  templateUrl: './active-jobs.component.html',
  styleUrls: ['./active-jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveJobsComponent implements AfterViewInit {
  jobs$: Observable<Array<Job>> = this.jobsService.getJobs();
  constructor(private readonly jobsService: JobsService) {}

  ngAfterViewInit(): void {
    this.jobs$ = this.jobsService.jobs$;
  }
}
