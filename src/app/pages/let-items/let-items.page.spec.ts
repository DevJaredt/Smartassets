import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LetItemsPage } from './let-items.page';

describe('LetItemsPage', () => {
  let component: LetItemsPage;
  let fixture: ComponentFixture<LetItemsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LetItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
