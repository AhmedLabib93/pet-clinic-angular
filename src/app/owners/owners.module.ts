import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { PetsModule } from '../pets/pets.module';
import { FormsModule } from '@angular/forms';
import { OwnersRoutingModule } from './owners-routing.module';


@NgModule({
  declarations: [
    OwnerAddComponent,
    OwnerDetailComponent,
    OwnerListComponent,
    OwnerUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OwnersRoutingModule,
    PetsModule
  ]
})
export class OwnersModule { }
