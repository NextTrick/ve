import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSigupComponent } from './auth-sigup.component';

describe('AuthSigupComponent', () => {
  let component: AuthSigupComponent;
  let fixture: ComponentFixture<AuthSigupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSigupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
