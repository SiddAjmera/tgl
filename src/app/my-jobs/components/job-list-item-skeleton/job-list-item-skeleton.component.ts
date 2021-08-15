import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-job-list-item-skeleton',
  templateUrl: './job-list-item-skeleton.component.html',
  styleUrls: ['./job-list-item-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListItemSkeletonComponent implements OnChanges {
  @Input() listLength = 5;
  items!: Array<number>;

  ngOnChanges(): void {
    this.items = new Array(this.listLength).fill(0);
  }
}
