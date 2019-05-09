import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskAnimationComponent } from './mask-animation.component';

describe('MaskAnimationComponent', () => {
  let component: MaskAnimationComponent;
  let fixture: ComponentFixture<MaskAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
