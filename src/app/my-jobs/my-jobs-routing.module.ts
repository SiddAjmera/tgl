import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActiveJobsComponent } from './pages/active-jobs/active-jobs.component';
import { ClosedJobsComponent } from './pages/closed-jobs/closed-jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { MyJobsComponent } from './my-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: MyJobsComponent,
    children: [
      {
        path: 'active',
        component: ActiveJobsComponent,
      },
      {
        path: 'closed',
        component: ClosedJobsComponent,
      },
    ],
  },
  {
    path: ':jobId',
    component: JobDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/my-jobs/active',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyJobsRoutingModule {}
