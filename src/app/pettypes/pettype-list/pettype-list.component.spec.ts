import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettypeListComponent } from './pettype-list.component';

describe('PettypeListComponent', () => {
  let component: PettypeListComponent;
  let fixture: ComponentFixture<PettypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PettypeListComponent]
    });
    fixture = TestBed.createComponent(PettypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
