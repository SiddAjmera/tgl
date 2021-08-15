# Think Global Logistics - My Jobs Screen

## Things Implemented:

Following features have been implemented:

- Routing
- Lazy Loading.
- Skeleton loading indicator.
- Filter (Since the data is not sufficient, different filters are implemented independent of each other. So whenever an option changes in the filter, the operation is performed on the original dataset with just 5 items in it)
- Sort (Since options were not given to sort jobs in ascending and descending order, the implementation assumes that it's going to be ascending order sort)
- Search (Again, it's independent of other filters and sort)

> Note: Regarding, filtering, searching, and sorting, there were a few questions that I had regarding which operation would take precedence, and also since the dataset was very small, I made all the operations independent of each other. But there's a property on the `JobsService`, called `filteredAndSortedJobs` that could be used to take into consideration that result of previous filter/search/sort operations while applying the current filter/search/sort operations.

> All the components are on `OnPush` `ChangeDetectionStrategy`

> Didn't really implement Store for this scenario and used a Shared Data Service(`JobsService`) instead for the sake of simplicity.

## Tech Documentation:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
