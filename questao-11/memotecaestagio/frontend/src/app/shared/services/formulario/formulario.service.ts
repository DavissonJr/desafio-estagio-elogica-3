import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MuralService } from '../mural/mural.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private _form = {
    pensamento: '',
    autor: '',
    modelo: 'modelo1',
  };

  private _modelos = ['modelo1', 'modelo2', 'modelo3'];

  constructor(private http: HttpClient, private muralService: MuralService) {}

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

  async salvarPensamento() {
    const payload = {
      pensamento: this._form.pensamento,
      autorNome: this._form.autor,
      modelo: this.modeloParaNumero(this._form.modelo),
    };

    try {
      const response = await lastValueFrom(
        this.http.post('https://localhost:7015/api/autores', payload)
      );
      this.muralService.adicionarPensamento(this._form);
      this.resetForm();
    } catch (error) {
      console.error('Erro ao salvar pensamento:', error);
    }
  }

  private modeloParaNumero(modelo: string): number {
    return this._modelos.indexOf(modelo); // ex: modelo1 → 0, modelo2 → 1
  }
}
