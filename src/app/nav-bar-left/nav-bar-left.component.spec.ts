import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLeftComponent } from './nav-bar-left.component';

describe('NavBarLeftComponent', () => {
  let component: NavBarLeftComponent;
  let fixture: ComponentFixture<NavBarLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarLeftComponent]
    });
    fixture = TestBed.createComponent(NavBarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
