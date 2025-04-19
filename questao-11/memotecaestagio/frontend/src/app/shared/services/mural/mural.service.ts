// mural.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Pensamento, PensamentoResponse } from '../../interfaces/Pensamento';

@Injectable({
  providedIn: 'root',
})
export class MuralService {
  private _pensamentos: Pensamento[] = [];

  constructor(private http: HttpClient) {}

  get pensamentos(): Pensamento[] {
    return this._pensamentos;
  }

  atualizarPensamento(pensamentoEditado: {
    id?: number;
    pensamento: string;
    autor: string;
    modelo: string;
  }) {
    const index = this._pensamentos.findIndex(
      (p) => p.id === pensamentoEditado.id
    );

    if (index !== -1) {
      this._pensamentos[index] = { ...pensamentoEditado };

      console.log('Pensamento atualizado:', this._pensamentos[index]);
    }
  }

  adicionarPensamento(pensamento: Pensamento) {
    this._pensamentos.push(pensamento);
  }

  async carregarPensamentos() {
    try {
      const response = await lastValueFrom(
        this.http.get<PensamentoResponse[]>(
          'https://localhost:7015/api/autores'
        )
      );

      this._pensamentos = response.map((p) => ({
        id: p.id,
        pensamento: p.pensamento,
        autor: p.autorNome,
        modelo: `modelo${p.modelo + 1}`,
      }));

      console.log('Pensamentos carregados: ', this._pensamentos); 
    } catch (error) {
      console.error('Erro ao carregar pensamentos:', error);
    }
  }

  async excluirPensamento(id: number) {
    try {
      await lastValueFrom(
        this.http.delete(`https://localhost:7015/api/autores/${id}`)
      );
      this._pensamentos = this._pensamentos.filter((p) => p.id !== id);
    } catch (error) {
      console.error('Erro ao excluir pensamento:', error);
    }
  }

  limparPensamentos() {
    this._pensamentos = [];
  }
}
