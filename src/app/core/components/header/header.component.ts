import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { MenuItem } from 'primeng/api';

import { Company } from './../../models/company.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  navBarItems!: Array<MenuItem>;
  avatarItems!: Array<MenuItem>;
  addItems!: Array<MenuItem>;

  @Input() companies: Array<Company> = [
    {
      name: 'Nick Scali',
      icon: '',
      id: 'some-id',
    },
    {
      name: 'Mel Swan',
      icon: '',
      id: 'some-id',
    },
  ];
  @Input() selectedCompany!: Company;

  ngOnInit(): void {
    this.navBarItems = [
      {
        label: 'My Jobs',
        routerLink: ['/my-jobs/active'],
      },
      {
        label: 'My Quotes',
        routerLink: ['/my-quotes'],
      },
    ];
    this.avatarItems = [
      {
        label: 'Profile',
        icon: 'pi pi-user',
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
      },
      {
        label: 'Logout',
        icon: 'pi pi-power-off',
      },
    ];
    this.addItems = [
      {
        label: 'New Job',
        icon: 'pi pi-briefcase',
      },
      {
        label: 'New Quote',
        icon: 'pi pi-dollar',
      },
    ];
  }
}
