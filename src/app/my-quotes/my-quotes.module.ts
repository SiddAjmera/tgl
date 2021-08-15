import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyQuotesRoutingModule } from './my-quotes-routing.module';
import { MyQuotesComponent } from './my-quotes.component';


@NgModule({
  declarations: [
    MyQuotesComponent
  ],
  imports: [
    CommonModule,
    MyQuotesRoutingModule
  ]
})
export class MyQuotesModule { }
