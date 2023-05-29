import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PettypesRoutingModule } from './pettypes-routing.module';
import { PettypeAddComponent } from './pettype-add/pettype-add.component';
import { PettypeUpdateComponent } from './pettype-update/pettype-update.component';
import { PettypeListComponent } from './pettype-list/pettype-list.component';


@NgModule({
  declarations: [
    PettypeAddComponent,
    PettypeUpdateComponent,
    PettypeListComponent
  ],
  imports: [
    CommonModule,
    PettypesRoutingModule
  ]
})
export class PettypesModule { }
