export interface Pensamento {
  id?: number;
  pensamento: string;
  autor: string;
  modelo: string;
}

// Tipo que representa a resposta da API
export interface PensamentoResponse {
  id: number;
  pensamento: string;
  autorNome: string;
  modelo: number;
}
