import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitsRoutingModule } from './visits-routing.module';
import { VisitAddComponent } from './visit-add/visit-add.component';
import { VisitEditComponent } from './visit-edit/visit-edit.component';
import { VisitUpdateComponent } from './visit-update/visit-update.component';
import { VisitListComponent } from './visit-list/visit-list.component';


@NgModule({
  declarations: [
    VisitAddComponent,
    VisitEditComponent,
    VisitUpdateComponent,
    VisitListComponent
  ],
  imports: [
    CommonModule,
    VisitsRoutingModule
  ]
})
export class VisitsModule { }
