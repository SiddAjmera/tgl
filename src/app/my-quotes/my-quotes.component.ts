import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyQuotesComponent {}
