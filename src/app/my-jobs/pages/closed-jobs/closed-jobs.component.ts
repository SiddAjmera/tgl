import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-closed-jobs',
  templateUrl: './closed-jobs.component.html',
  styleUrls: ['./closed-jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClosedJobsComponent {}
