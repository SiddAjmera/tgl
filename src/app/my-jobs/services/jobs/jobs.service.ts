import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DateService } from './../../../core/services/date/date.service';
import {
  DateOption,
  DropdownModel,
  JobLogItem,
  JobType,
  SortByOption,
} from './../../models/job.model';
import { Job } from '../../models/job.model';

@Injectable()
export class JobsService {
  private locations = new BehaviorSubject<Array<DropdownModel>>([]);
  locations$ = this.locations.asObservable();

  private searchSuggestions = new BehaviorSubject<Array<string>>([]);
  searchSuggestions$ = this.searchSuggestions.asObservable();

  private jobs = new BehaviorSubject<Array<Job>>([]);
  jobs$ = this.jobs.asObservable();

  private retrievedJobs!: Array<Job>;
  // NOTE: This could be used potentially to store the currently filtered and sorted jobs
  private filteredAndSortedJobs!: Array<Job>;

  constructor(
    private readonly http: HttpClient,
    private readonly dateService: DateService
  ) {}

  handleSortOptionChange(selectedSortOption: SortByOption): void {
    // Sort Direction not specified in the designs. So Assuming the sort will always be Ascending.
    const sortedJobs = this.retrievedJobs
      .sort((jobA: Job, jobB: Job) => {
        const { supplier: supplierA } = jobA;
        const { supplier: supplierB } = jobB;

        if (selectedSortOption === SortByOption.Supplier) {
          return supplierA > supplierB ? 1 : -1;
        } else {
          const a = jobA[selectedSortOption];
          const b = jobB[selectedSortOption];
          return new Date(a).getTime() > new Date(b).getTime() ? 1 : -1;
        }
      })
      .slice();

    this.jobs.next(sortedJobs);
  }

  handleSearchOptionChange(newFilter: string): void {
    const filteredJobs = this.retrievedJobs.filter((job: Job) =>
      JSON.stringify(job).toLowerCase().includes(newFilter.toLowerCase())
    );
    this.jobs.next(filteredJobs);
  }

  handleFilterByType(selectedJobType: JobType): void {
    const filteredJobs = this.retrievedJobs.filter(
      ({ type }: Job) => type === selectedJobType
    );
    this.jobs.next(filteredJobs);
  }

  handleFilterByLocation(selectedLocation: string): void {
    const selectedLocationToSearchFor = selectedLocation.toUpperCase();
    const filteredJobs = this.retrievedJobs.filter(
      ({ source, destination }: Job) =>
        source.toUpperCase() === selectedLocationToSearchFor ||
        destination.toUpperCase() === selectedLocationToSearchFor
    );
    this.jobs.next(filteredJobs);
  }

  handleFilterByDepartureDate(selectedDepartureDate: DateOption): void {
    const departureDateThreshold = this.dateService.getThresholdDate(
      selectedDepartureDate
    );
    const filteredJobs = this.retrievedJobs.filter(
      ({ departureDate }: Job) =>
        new Date(departureDate).getTime() <
        new Date(departureDateThreshold).getTime()
    );
    this.jobs.next(filteredJobs);
  }

  handleFilterByArrivalDate(selectedArrivalDate: DateOption): void {
    const arrivalDateThreshold = this.dateService.getThresholdDate(
      selectedArrivalDate
    );
    const filteredJobs = this.retrievedJobs.filter(
      ({ arrivalDate }: Job) =>
        new Date(arrivalDate).getTime() <
        new Date(arrivalDateThreshold).getTime()
    );
    this.jobs.next(filteredJobs);
  }

  getJobs(): Observable<Array<Job>> {
    return this.http
      .get<Array<Job>>(
        'https://jsonblob.com/api/87265f7f-fcf8-11eb-81be-f510c6bbcca1'
      )
      .pipe(tap((jobs: Array<Job>) => this.setLocationsAndSuggestions(jobs)));
  }

  private setLocationsAndSuggestions(jobs: Array<Job>): void {
    this.retrievedJobs = [...jobs];
    const locations: any = {};
    const searchSuggestions: any = {};

    jobs.forEach(({ source, destination, logs }: Job) => {
      const sourceToPut = source.toUpperCase();
      const destinationToPut = destination.toUpperCase();

      const suppliers = logs
        .map(({ supplier }: JobLogItem) => supplier.toUpperCase())
        .filter((supplier: string) => supplier);
      locations[sourceToPut] = sourceToPut;
      locations[destinationToPut] = destinationToPut;

      searchSuggestions[sourceToPut] = sourceToPut;
      searchSuggestions[destinationToPut] = destinationToPut;
      suppliers.forEach(
        (supplier: string) => (searchSuggestions[supplier] = supplier)
      );
    });

    this.locations.next(
      this.generateDropdownOptions(locations) as Array<DropdownModel>
    );
    this.searchSuggestions.next(
      this.generateDropdownOptions(searchSuggestions, true) as Array<string>
    );

    this.jobs.next(jobs);
  }

  private generateDropdownOptions(
    options: any,
    returnString?: boolean
  ): Array<DropdownModel | string> {
    const sortedOptions = Object.keys(options).sort();
    if (returnString) {
      return sortedOptions;
    }
    return sortedOptions.map((key) => ({
      label: key,
      value: key,
    }));
  }
}
