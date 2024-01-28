import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintanceErrorComponent } from './maintance-error.component';

describe('MaintanceErrorComponent', () => {
  let component: MaintanceErrorComponent;
  let fixture: ComponentFixture<MaintanceErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintanceErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintanceErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
