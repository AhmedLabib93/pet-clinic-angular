import { Component } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent {

  id: number;
  owner: Owner = new Owner();

  constructor(private ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ownerService.getOwnerById(this.id).subscribe(data => {
      this.owner = data;
    });
  }

  addPet() {

  }

  editOwner() {
    this.router.navigate(['owners', 'owner-update', this.id]);
  }

  back() {
    this.router.navigate(['owners', 'owner-list']);
  }
}
