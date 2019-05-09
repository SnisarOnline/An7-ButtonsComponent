import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundHoverComponent } from './round-hover.component';

describe('RoundHoverComponent', () => {
  let component: RoundHoverComponent;
  let fixture: ComponentFixture<RoundHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
