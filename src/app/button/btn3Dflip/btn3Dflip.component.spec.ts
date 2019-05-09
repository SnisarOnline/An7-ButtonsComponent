import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn3DflipComponent } from './btn3Dflip.component';

describe('Btn3DflipComponent', () => {
  let component: Btn3DflipComponent;
  let fixture: ComponentFixture<Btn3DflipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Btn3DflipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Btn3DflipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
