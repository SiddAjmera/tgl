import { JobType, JobTypeToImageMap } from './../../models/job.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobTypeLogo',
})
export class JobTypeLogoPipe implements PipeTransform {
  jobTypeToImageMap: JobTypeToImageMap = {
    RAIL: '../../../../assets/images/rail.png',
    SEA: '../../../../assets/images/sea.svg',
    AIR: '../../../../assets/images/air.svg',
    WAREHOUSE: '../../../../assets/images/warehouse.svg',
    TRANSPORT: '../../../../assets/images/transport.svg',
  };

  transform(jobType: JobType): string {
    return this.jobTypeToImageMap[jobType];
  }
}
