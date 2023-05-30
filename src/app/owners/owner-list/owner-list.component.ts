import { Component } from '@angular/core';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent {

  constructor(private router: Router, private ownerService: OwnerService) { }

  owners: Owner[];
  lastName: string;
  ngOnInit() {
    this.ownerService.getOwnersList().subscribe(data => {
      this.owners = data;
    })
  }

  getOwnersByLastName() {
    console.log('lastname=', this.lastName);
    if (this.lastName == '' || this.lastName === undefined) {
      this.ownerService.getOwnersList().subscribe(data => {
        this.owners = data;
      })
    } else {
      this.ownerService.getOwnersByLastName(this.lastName).subscribe(data => {
        this.owners = data;
      })
    }
  }

  viewOwner(id: number) {
    this.router.navigate(['owners', 'owner-detail', id]);
  }
}
