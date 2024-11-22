import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssestsPage } from './assests.page';

describe('AssestsPage', () => {
  let component: AssestsPage;
  let fixture: ComponentFixture<AssestsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
