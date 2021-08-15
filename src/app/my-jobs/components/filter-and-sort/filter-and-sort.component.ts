import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  DateOption,
  DropdownModel,
  JobType,
  SortByOption,
} from './../../models/job.model';
import {
  DateOptions,
  JobTypes,
  SortByOptions,
} from './../../constants/my-jobs.constants';
import { JobsService } from './../../services/jobs/jobs.service';

@Component({
  selector: 'app-filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterAndSortComponent implements OnInit, OnDestroy {
  jobTypes = JobTypes;
  selectedJobType!: DropdownModel;
  locations$: Observable<Array<DropdownModel>> = this.jobsService.locations$;
  selectedLocation!: DropdownModel;
  departureDateOptions = DateOptions;
  selectedDepartureDate!: DropdownModel;
  arrivalDateOptions = DateOptions;
  selectedArrivalDate!: DropdownModel;
  sortByOptions = SortByOptions;
  selectedSortByOption!: DropdownModel;
  searchSuggestions!: Array<string>;
  filteredSuggestions!: Array<string>;
  selectedSearchSuggestion!: string;

  private destroyed$ = new Subject();

  constructor(private readonly jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobsService.searchSuggestions$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((suggestions) => {
        this.searchSuggestions = [...suggestions];
        this.filteredSuggestions = [...suggestions];
      });
  }

  handleSortOptionChange(): void {
    this.jobsService.handleSortOptionChange(
      this.selectedSortByOption.value as SortByOption
    );
  }

  filterCountry(event: any): void {
    const { query } = event;
    this.filteredSuggestions = this.searchSuggestions.filter((value: string) =>
      value.includes(query.toUpperCase())
    );
  }

  handleFilterByType(): void {
    this.jobsService.handleFilterByType(this.selectedJobType.value as JobType);
  }

  handleFilterByLocation(): void {
    this.jobsService.handleFilterByLocation(this.selectedLocation.value);
  }

  handleFilter(): void {
    this.jobsService.handleSearchOptionChange(this.selectedSearchSuggestion);
  }

  handleFilterByDepartureDate(): void {
    this.jobsService.handleFilterByDepartureDate(
      this.selectedDepartureDate.value as DateOption
    );
  }

  handleFilterByArrivalDate(): void {
    this.jobsService.handleFilterByArrivalDate(
      this.selectedArrivalDate.value as DateOption
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
