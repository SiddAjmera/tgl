import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        ({ DashboardModule }) => DashboardModule
      ),
  },
  {
    path: 'my-jobs',
    loadChildren: () =>
      import('./my-jobs/my-jobs.module').then(
        ({ MyJobsModule }) => MyJobsModule
      ),
  },
  {
    path: 'my-quotes',
    loadChildren: () =>
      import('./my-quotes/my-quotes.module').then(
        ({ MyQuotesModule }) => MyQuotesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
