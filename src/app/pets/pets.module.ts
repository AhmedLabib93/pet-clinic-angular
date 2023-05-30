import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PetAddComponent,
    PetListComponent,
    PetUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PetsRoutingModule
  ],
  exports:[
    PetAddComponent,
    PetListComponent,
    PetUpdateComponent
  ]
})
export class PetsModule { }
