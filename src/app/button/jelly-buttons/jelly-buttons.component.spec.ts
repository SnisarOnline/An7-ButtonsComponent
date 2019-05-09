import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyButtonsComponent } from './jelly-buttons.component';

describe('JellyButtonsComponent', () => {
  let component: JellyButtonsComponent;
  let fixture: ComponentFixture<JellyButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JellyButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JellyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
