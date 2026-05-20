import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueConsFragment } from './label-value-cons.fragment';

describe('LabelValueConsFragment', () => {
  let component: LabelValueConsFragment;
  let fixture: ComponentFixture<LabelValueConsFragment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelValueConsFragment],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelValueConsFragment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
