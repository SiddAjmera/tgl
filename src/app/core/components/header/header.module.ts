import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    AvatarModule,
    BadgeModule,
    BrowserAnimationsModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    MenuModule,
    MenubarModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
