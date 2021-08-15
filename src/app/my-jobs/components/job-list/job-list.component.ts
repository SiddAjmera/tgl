import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Job } from './../../models/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListComponent {
  @Input() jobs!: Array<Job>;
}
