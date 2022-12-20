import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialComponentComponent } from './matrial-component.component';

describe('MatrialComponentComponent', () => {
  let component: MatrialComponentComponent;
  let fixture: ComponentFixture<MatrialComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrialComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
