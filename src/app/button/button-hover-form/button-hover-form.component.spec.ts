import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHoverFormComponent } from './button-hover-form.component';

describe('ButtonHoverFormComponent', () => {
  let component: ButtonHoverFormComponent;
  let fixture: ComponentFixture<ButtonHoverFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHoverFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHoverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
