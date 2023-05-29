import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetsRoutingModule } from './vets-routing.module';
import { VetAddComponent } from './vet-add/vet-add.component';
import { VetUpdateComponent } from './vet-update/vet-update.component';
import { VetListComponent } from './vet-list/vet-list.component';


@NgModule({
  declarations: [
    VetAddComponent,
    VetUpdateComponent,
    VetListComponent
  ],
  imports: [
    CommonModule,
    VetsRoutingModule
  ]
})
export class VetsModule { }
