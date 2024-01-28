import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorIndexComponent } from './error-index.component';

describe('ErrorIndexComponent', () => {
  let component: ErrorIndexComponent;
  let fixture: ComponentFixture<ErrorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
