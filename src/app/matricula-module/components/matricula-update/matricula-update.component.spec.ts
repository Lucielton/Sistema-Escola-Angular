import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaUpdateComponent } from './matricula-update.component';

describe('MatriculaUpdateComponent', () => {
  let component: MatriculaUpdateComponent;
  let fixture: ComponentFixture<MatriculaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
