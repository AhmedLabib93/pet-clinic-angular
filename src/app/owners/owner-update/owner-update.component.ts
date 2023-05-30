import { Component } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent {

  id: number;
  owner: Owner = new Owner();

  constructor(private ownerService: OwnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ownerService.getOwnerById(this.id).subscribe(data => {
      this.owner = data;
    });
  }

  updateOwner() {
    this.ownerService.updateOwner(this.id, this.owner).subscribe(data => {
      this.owner = new Owner();
      this.back();
    });
  }

  onSubmit() {
    this.updateOwner();
  }

  back() {
    this.router.navigate(['owners']);
  }
}
