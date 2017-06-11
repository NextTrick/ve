import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphomeComponent } from './apphome.component';

describe('ApphomeComponent', () => {
  let component: ApphomeComponent;
  let fixture: ComponentFixture<ApphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
