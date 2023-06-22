import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxworkComponent } from './ngrxwork.component';

describe('NgrxworkComponent', () => {
  let component: NgrxworkComponent;
  let fixture: ComponentFixture<NgrxworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
