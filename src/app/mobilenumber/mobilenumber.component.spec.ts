import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilenumberComponent } from './mobilenumber.component';

describe('MobilenumberComponent', () => {
  let component: MobilenumberComponent;
  let fixture: ComponentFixture<MobilenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilenumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
