import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaipageRoutingModule } from './maipage-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaipageRoutingModule
  ]
})
export class MaipageModule { }
