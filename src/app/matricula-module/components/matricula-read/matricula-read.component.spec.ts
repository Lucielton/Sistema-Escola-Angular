import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaReadComponent } from './matricula-read.component';

describe('MatriculaReadComponent', () => {
  let component: MatriculaReadComponent;
  let fixture: ComponentFixture<MatriculaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
