import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootballPage } from './football.page';

describe('FootballPage', () => {
  let component: FootballPage;
  let fixture: ComponentFixture<FootballPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FootballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
