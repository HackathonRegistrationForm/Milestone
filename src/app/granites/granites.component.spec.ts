import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranitesComponent } from './granites.component';

describe('GranitesComponent', () => {
  let component: GranitesComponent;
  let fixture: ComponentFixture<GranitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GranitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
