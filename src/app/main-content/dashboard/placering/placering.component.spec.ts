import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceringComponent } from './placering.component';

describe('PlaceringComponent', () => {
  let component: PlaceringComponent;
  let fixture: ComponentFixture<PlaceringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
