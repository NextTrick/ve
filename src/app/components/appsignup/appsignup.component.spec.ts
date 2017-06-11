import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsignupComponent } from './appsignup.component';

describe('AppsignupComponent', () => {
  let component: AppsignupComponent;
  let fixture: ComponentFixture<AppsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
