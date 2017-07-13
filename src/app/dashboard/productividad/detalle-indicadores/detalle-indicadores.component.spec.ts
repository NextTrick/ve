import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIndicadoresComponent } from './detalle-indicadores.component';

describe('DetalleIndicadoresComponent', () => {
  let component: DetalleIndicadoresComponent;
  let fixture: ComponentFixture<DetalleIndicadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleIndicadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
