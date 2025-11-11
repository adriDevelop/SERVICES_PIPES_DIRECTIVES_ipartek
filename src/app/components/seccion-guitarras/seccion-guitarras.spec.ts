import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionGuitarras } from './seccion-guitarras';

describe('SeccionGuitarras', () => {
  let component: SeccionGuitarras;
  let fixture: ComponentFixture<SeccionGuitarras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionGuitarras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionGuitarras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
