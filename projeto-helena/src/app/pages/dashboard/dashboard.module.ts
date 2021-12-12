import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MaterialModule} from "../../shared/material/material.module";
import {ComponentsModule} from "../../shared/components/components.module";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ComponentsModule,
    MatListModule
  ]
})
export class DashboardModule { }
