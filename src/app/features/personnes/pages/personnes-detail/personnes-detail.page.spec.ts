import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesDetailPage } from './personnes-detail.page';

describe('PersonnesDetailPage', () => {
  let component: PersonnesDetailPage;
  let fixture: ComponentFixture<PersonnesDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnesDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
