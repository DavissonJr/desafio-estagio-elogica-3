import { Injectable } from '@angular/core';

export interface Pensamento {
  pensamento: string;
  autor: string;
  modelo: string;
}

@Injectable({
  providedIn: 'root'
})
export class MuralService {
  private _pensamentos: Pensamento[] = [];

  get pensamentos(): Pensamento[] {
    return this._pensamentos;
  }

  adicionarPensamento(p: Pensamento) {
    this._pensamentos.push(p);
  }
}
