import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageDate } from './affichage-date';

describe('AffichageDate', () => {
  let component: AffichageDate;
  let fixture: ComponentFixture<AffichageDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageDate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageDate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
