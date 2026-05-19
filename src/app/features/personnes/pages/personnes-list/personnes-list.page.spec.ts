import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesListPage } from './personnes-list.page';

describe('PersonnesListPage', () => {
  let component: PersonnesListPage;
  let fixture: ComponentFixture<PersonnesListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnesListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
