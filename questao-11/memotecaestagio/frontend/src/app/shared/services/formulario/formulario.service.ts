import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private _form = {
    pensamento: '',
    autor: '',
    modelo: 'modelo1',
  };

  private _modelos = ['modelo 1', 'modelo 2', 'modelo 3'];

  get form() {
    return this._form;
  }

  get modelos() {
    return this._modelos;
  }

  resetForm() {
    this._form = {
      pensamento: '',
      autor: '',
      modelo: 'modelo1',
    };
  }

  salvarPensamento() {
    // consumo da API
    console.log('Pensamento salvo:', this._form);
  }
}
