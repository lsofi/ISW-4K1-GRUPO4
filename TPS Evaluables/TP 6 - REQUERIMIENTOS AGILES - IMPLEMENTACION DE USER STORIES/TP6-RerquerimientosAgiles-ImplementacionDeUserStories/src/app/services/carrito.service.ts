import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  get(){
    return of(carrito);
  }
}
