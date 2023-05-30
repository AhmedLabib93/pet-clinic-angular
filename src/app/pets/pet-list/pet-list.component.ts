import { Component, Input } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent {

  @Input() pet: Pet = new Pet();

  constructor(private petService: PetService,
    private router: Router) {

  }

  editPet() {

  }

  addVisit() {

  }
}
