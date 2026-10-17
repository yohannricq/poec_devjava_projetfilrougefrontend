import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateThemeComponent } from './form-create-theme.component';

describe('FormCreateThemeComponent', () => {
  let component: FormCreateThemeComponent;
  let fixture: ComponentFixture<FormCreateThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateThemeComponent]
    });
    fixture = TestBed.createComponent(FormCreateThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
