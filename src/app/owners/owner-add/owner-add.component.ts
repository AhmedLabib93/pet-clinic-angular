import { Component } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent {

  owner: Owner = new Owner();

  constructor(private ownerService: OwnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  onSubmit() {
    this.addNewOwner();
  }

  addNewOwner() {
    this.ownerService.addNewOwner(this.owner).subscribe(data => {
      this.back();
    });
  }

  back() {
    this.router.navigate(['owners']);
  }
}
