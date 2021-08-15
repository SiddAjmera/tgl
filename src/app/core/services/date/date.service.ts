import { Injectable } from '@angular/core';

import { DateOption } from './../../../my-jobs/models/job.model';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  getThresholdDate(selectedDateFilter: DateOption): Date {
    let dateToReturn;
    switch (selectedDateFilter) {
      case DateOption.NextDay:
        dateToReturn = this.getDateAfterNDays(1);
        break;
      case DateOption.NextWeek:
        dateToReturn = this.getDateAfterNDays(7);
        break;
      case DateOption.NextTwoWeeks:
        dateToReturn = this.getDateAfterNDays(14);
        break;
      case DateOption.NextMonth:
      default:
        dateToReturn = this.getDateAfterNDays(30);
        break;
    }
    return dateToReturn;
  }

  private getDateAfterNDays(n: number): Date {
    const today = new Date();
    const dateAfterNDays = new Date(today);
    dateAfterNDays.setDate(dateAfterNDays.getDate() + n);
    return dateAfterNDays;
  }
}
