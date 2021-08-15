export interface JobLogItem {
  customerReference: string;
  containers: string;
  supplier: string;
}

export interface JobTimelineItem {
  status: string;
  date: string;
}

export interface DropdownModel {
  value: string;
  label: string;
}

export interface Job {
  type: JobType;
  id: string;
  source: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  supplier: string;
  timeline: Array<JobTimelineItem>;
  logs: Array<JobLogItem>;
}

export enum DateOption {
  NextDay = 'New Day',
  NextWeek = 'Next Week',
  NextTwoWeeks = 'Next 2 Weeks',
  NextMonth = 'Next Month',
}

export enum SortByOption {
  Supplier = 'supplier',
  DepartureDate = 'departureDate',
  ArrivalDate = 'arrivalDate',
}

export enum JobType {
  AIR = 'AIR',
  SEA = 'SEA',
  TRANSPORT = 'TRANSPORT',
  WAREHOUSE = 'WAREHOUSE',
  RAIL = 'RAIL',
}

export type JobTypeToImageMap = {
  [key in JobType]: string;
};
