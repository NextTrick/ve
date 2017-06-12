import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprecoverpasswordComponent } from './apprecoverpassword.component';

describe('ApprecoverpasswordComponent', () => {
  let component: ApprecoverpasswordComponent;
  let fixture: ComponentFixture<ApprecoverpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprecoverpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprecoverpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
