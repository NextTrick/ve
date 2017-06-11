import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsingupComponent } from './appsingup.component';

describe('AppsingupComponent', () => {
  let component: AppsingupComponent;
  let fixture: ComponentFixture<AppsingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
