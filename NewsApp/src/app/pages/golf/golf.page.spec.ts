import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GolfPage } from './golf.page';

describe('GolfPage', () => {
  let component: GolfPage;
  let fixture: ComponentFixture<GolfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GolfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
