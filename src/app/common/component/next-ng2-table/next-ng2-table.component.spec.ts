import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextNg2TableComponent } from './next-ng2-table.component';

describe('NextNg2TableComponent', () => {
  let component: NextNg2TableComponent;
  let fixture: ComponentFixture<NextNg2TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextNg2TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextNg2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
