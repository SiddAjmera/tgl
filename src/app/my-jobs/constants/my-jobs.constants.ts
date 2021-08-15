import { DateOption, JobType, SortByOption } from './../models/job.model';

export const JobTypes = [
  { value: JobType.AIR, label: JobType.AIR },
  { value: JobType.SEA, label: JobType.SEA },
  { value: JobType.TRANSPORT, label: JobType.TRANSPORT },
  { value: JobType.WAREHOUSE, label: JobType.WAREHOUSE },
  { value: JobType.RAIL, label: JobType.RAIL },
];

export const DateOptions = [
  { value: DateOption.NextDay, label: DateOption.NextDay },
  { value: DateOption.NextWeek, label: DateOption.NextWeek },
  { value: DateOption.NextTwoWeeks, label: DateOption.NextTwoWeeks },
  { value: DateOption.NextMonth, label: DateOption.NextMonth },
];

export const SortByOptions = [
  { value: SortByOption.Supplier, label: 'Supplier' },
  { value: SortByOption.DepartureDate, label: 'Departure Date' },
  { value: SortByOption.ArrivalDate, label: 'Arrival Date' },
];
