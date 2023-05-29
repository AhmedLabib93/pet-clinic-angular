import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { SpecialityAddComponent } from './speciality-add/speciality-add.component';
import { SpecialityUpdateComponent } from './speciality-update/speciality-update.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';


@NgModule({
  declarations: [
    SpecialityAddComponent,
    SpecialityUpdateComponent,
    SpecialityListComponent
  ],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule
  ]
})
export class SpecialitiesModule { }
