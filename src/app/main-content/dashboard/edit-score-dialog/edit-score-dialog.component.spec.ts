import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScoreDialogComponent } from './edit-score-dialog.component';

describe('EditScoreDialogComponent', () => {
  let component: EditScoreDialogComponent;
  let fixture: ComponentFixture<EditScoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditScoreDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditScoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
