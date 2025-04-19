import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MuralService } from '../mural/mural.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private _form: {
    id?: number;
    pensamento: string;
    autor: string;
    modelo: string;
  } = {
    pensamento: '',
    autor: '',
    modelo: 'modelo1',
  };

  private _modelos = ['modelo1', 'modelo2', 'modelo3'];

  private readonly apiUrl = 'https://localhost:7015/api/autores';

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

  setForm(dados: {
    id?: number;
    pensamento: string;
    autor: string;
    modelo: string;
  }) {
    console.log('📋 SET FORM:', dados);
    this._form = { ...dados };
  }

  async salvarPensamento(): Promise<boolean> {
    const payload = {
      pensamento: this._form.pensamento,
      autorNome: this._form.autor,
      modelo: this.modeloParaNumero(this._form.modelo),
    };

    const isEdicao = this._form.id !== undefined;

    try {
      if (isEdicao) {
        // Atualiza no backend
        await lastValueFrom(
          this.http.put(`${this.apiUrl}/${this._form.id}`, payload)
        );

        // Atualiza no frontend
        this.muralService.atualizarPensamento({
          id: this._form.id,
          pensamento: this._form.pensamento,
          autor: this._form.autor,
          modelo: this._form.modelo,
        });


        await this.muralService.carregarPensamentos();
      } else {

        const response = await lastValueFrom(
          this.http.post(this.apiUrl, payload)
        );


        this.muralService.adicionarPensamento({
          id: (response as any).id,
          pensamento: this._form.pensamento,
          autor: this._form.autor,
          modelo: this._form.modelo,
        });
      }

      this.resetForm();

      return true;
    } catch (error: any) {
      console.error('Erro ao salvar pensamento:', error);
      return false;
    }
  }

  private modeloParaNumero(modelo: string): number {
    return this._modelos.indexOf(modelo); // ex: modelo1 → 0, modelo2 → 1
  }
}
