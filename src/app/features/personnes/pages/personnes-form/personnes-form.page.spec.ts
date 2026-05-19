import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesFormPage } from './personnes-form.page';

describe('PersonnesFormPage', () => {
  let component: PersonnesFormPage;
  let fixture: ComponentFixture<PersonnesFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnesFormPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnesFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
