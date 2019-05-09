import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblyButtonComponent } from './bubbly-button.component';

describe('BubblyButtonComponent', () => {
  let component: BubblyButtonComponent;
  let fixture: ComponentFixture<BubblyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubblyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
