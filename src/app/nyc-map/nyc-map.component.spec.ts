import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NycMapComponent } from './nyc-map.component';

describe('NycMapComponent', () => {
  let component: NycMapComponent;
  let fixture: ComponentFixture<NycMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NycMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NycMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
