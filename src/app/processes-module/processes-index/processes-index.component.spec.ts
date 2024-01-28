import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessesIndexComponent } from './processes-index.component';

describe('ProcessesIndexComponent', () => {
  let component: ProcessesIndexComponent;
  let fixture: ComponentFixture<ProcessesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessesIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
