import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgidlekeepaliveComponent } from './ngidlekeepalive.component';

describe('NgidlekeepaliveComponent', () => {
  let component: NgidlekeepaliveComponent;
  let fixture: ComponentFixture<NgidlekeepaliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgidlekeepaliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgidlekeepaliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
