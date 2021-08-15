import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

import { Job } from './../../models/job.model';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListItemComponent implements OnChanges {
  @Input() job!: Job;
  hasJobDepartureDatePassed!: boolean;

  ngOnChanges(): void {
    this.hasJobDepartureDatePassed =
      new Date().getTime() > new Date(this.job.departureDate).getTime();
  }
}
