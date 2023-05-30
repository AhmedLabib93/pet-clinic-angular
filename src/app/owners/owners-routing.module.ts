import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';

const routes: Routes = [
  {
    path: 'owners', children: [
      { path: 'owner-add', component: OwnerAddComponent, pathMatch: 'full' },
      { path: 'owner-detail/:id', component: OwnerDetailComponent, pathMatch: 'full' },
      { path: 'owner-update/:id', component: OwnerUpdateComponent, pathMatch: 'full' },
      { path: 'owner-list', component: OwnerListComponent, pathMatch: 'full' },
      { path: '', component: OwnerListComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
