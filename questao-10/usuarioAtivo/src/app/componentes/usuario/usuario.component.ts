import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule],
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {
  usuarioAtivo: boolean | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.verificarUsuarioAtivo().subscribe({
      next: (res) => {
        this.usuarioAtivo = res.usuarioAtivo;
      },
      error: (err) => {
        console.error('Erro ao verificar usuário:', err);
      }
    });
  }
}
