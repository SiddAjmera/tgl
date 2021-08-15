import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyQuotesComponent } from './my-quotes.component';

const routes: Routes = [
  {
    path: '',
    component: MyQuotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyQuotesRoutingModule {}
