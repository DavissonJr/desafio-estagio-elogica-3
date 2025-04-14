import { Component } from '@angular/core';
import { UsuarioComponent } from "./componentes/usuario/usuario.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UsuarioComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usuarioAtivo';
}
