import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMainComponent } from './club-main.component';

describe('ClubMainComponent', () => {
  let component: ClubMainComponent;
  let fixture: ComponentFixture<ClubMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
