import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormularioComponent } from "./paginas/formulario/formulario.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, FormularioComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'formulario-questao-8';
}