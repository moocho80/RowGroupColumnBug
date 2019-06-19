import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialDatesCellComponent } from './initial-dates-cell.component';

describe('InitialDatesCellComponent', () => {
  let component: InitialDatesCellComponent;
  let fixture: ComponentFixture<InitialDatesCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialDatesCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialDatesCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
