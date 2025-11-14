import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corazon } from './corazon';

describe('Corazon', () => {
  let component: Corazon;
  let fixture: ComponentFixture<Corazon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corazon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corazon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
