import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaInstrumento } from './ficha-instrumento';

describe('FichaInstrumento', () => {
  let component: FichaInstrumento;
  let fixture: ComponentFixture<FichaInstrumento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaInstrumento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaInstrumento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
