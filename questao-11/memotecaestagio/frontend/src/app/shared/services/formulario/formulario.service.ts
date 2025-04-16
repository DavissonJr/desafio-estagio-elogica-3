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

  private _modelos = ['modelo1', 'modelo2', 'modelo3'];

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
    // Aqui você pode adicionar lógica para salvar, ex: via API ou LocalStorage
    console.log('Pensamento salvo:', this._form);
  }
}
