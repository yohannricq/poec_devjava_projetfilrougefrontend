import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicThemeDetailComponent } from './public-theme-detail.component';

describe('PublicThemeDetailComponent', () => {
  let component: PublicThemeDetailComponent;
  let fixture: ComponentFixture<PublicThemeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicThemeDetailComponent]
    });
    fixture = TestBed.createComponent(PublicThemeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
