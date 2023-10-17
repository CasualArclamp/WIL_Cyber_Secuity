import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutipleComponent } from './mutiple.component';

describe('MutipleComponent', () => {
  let component: MutipleComponent;
  let fixture: ComponentFixture<MutipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutipleComponent]
    });
    fixture = TestBed.createComponent(MutipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
