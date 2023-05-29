import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettypeUpdateComponent } from './pettype-update.component';

describe('PettypeUpdateComponent', () => {
  let component: PettypeUpdateComponent;
  let fixture: ComponentFixture<PettypeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PettypeUpdateComponent]
    });
    fixture = TestBed.createComponent(PettypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
