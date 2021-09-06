import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { productos } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  get(){
    return of(productos);
  }

}
