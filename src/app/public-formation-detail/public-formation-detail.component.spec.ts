import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFormationDetailComponent } from './public-formation-detail.component';

describe('PublicFormationDetailComponent', () => {
  let component: PublicFormationDetailComponent;
  let fixture: ComponentFixture<PublicFormationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicFormationDetailComponent]
    });
    fixture = TestBed.createComponent(PublicFormationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
