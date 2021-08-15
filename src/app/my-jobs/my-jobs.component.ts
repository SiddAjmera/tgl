import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyJobsComponent {
  items: MenuItem[] = [
    { label: 'Active', routerLink: '/my-jobs/active' },
    { label: 'Closed', routerLink: '/my-jobs/closed' },
  ];
}
