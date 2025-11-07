import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyList } from './rick-morty-list';

describe('RickMortyList', () => {
  let component: RickMortyList;
  let fixture: ComponentFixture<RickMortyList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickMortyList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickMortyList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
