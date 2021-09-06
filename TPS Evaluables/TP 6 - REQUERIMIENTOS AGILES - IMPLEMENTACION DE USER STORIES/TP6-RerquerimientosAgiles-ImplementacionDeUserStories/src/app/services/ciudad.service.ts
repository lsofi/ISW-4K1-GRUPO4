import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { ciudades } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor() { }

  get(){
    return of(ciudades);
  }

}
