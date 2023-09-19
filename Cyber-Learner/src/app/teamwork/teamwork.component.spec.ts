import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamworkComponent } from './teamwork.component';

describe('TeamworkComponent', () => {
  let component: TeamworkComponent;
  let fixture: ComponentFixture<TeamworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamworkComponent]
    });
    fixture = TestBed.createComponent(TeamworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
