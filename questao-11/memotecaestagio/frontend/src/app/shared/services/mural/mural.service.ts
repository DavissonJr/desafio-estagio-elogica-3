import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Pensamento, PensamentoResponse } from '../../interfaces/Pensamento';



@Injectable({
  providedIn: 'root'
})
export class MuralService {
  private _pensamentos: Pensamento[] = [];

  constructor(private http: HttpClient) {}

  get pensamentos(): Pensamento[] {
    return this._pensamentos;
  }

  adicionarPensamento(p: Pensamento) {
    this._pensamentos.push(p);
  }

  async carregarPensamentos() {
    try {
      const response = await lastValueFrom(
        this.http.get<PensamentoResponse[]>('https://localhost:7015/api/autores')
      );

      this._pensamentos = response.map(p => ({
        id: p.id,
        pensamento: p.pensamento,
        autor: p.autorNome,
        modelo: `modelo${p.modelo + 1}`
      }));
    } catch (error) {
      console.error('Erro ao carregar pensamentos:', error);
    }
  }

  limparPensamentos() {
    this._pensamentos = [];
  }
}
