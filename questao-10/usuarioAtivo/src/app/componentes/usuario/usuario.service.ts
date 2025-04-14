import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() {}

  verificarUsuarioAtivo(): Observable<{ usuarioAtivo: boolean }> {
    // simula uma requisição e retorna true/false
    const resposta = { usuarioAtivo: true }; // ou false para testar alerta vermelho
    return of(resposta);
  }
}
