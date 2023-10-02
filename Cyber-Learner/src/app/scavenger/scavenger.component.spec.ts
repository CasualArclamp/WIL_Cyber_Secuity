import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScavengerComponent } from './scavenger.component';

describe('ScavengerComponent', () => {
  let component: ScavengerComponent;
  let fixture: ComponentFixture<ScavengerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScavengerComponent]
    });
    fixture = TestBed.createComponent(ScavengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
