import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioPedidoComponent } from './envio-pedido.component';

describe('EnvioPedidoComponent', () => {
  let component: EnvioPedidoComponent;
  let fixture: ComponentFixture<EnvioPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
