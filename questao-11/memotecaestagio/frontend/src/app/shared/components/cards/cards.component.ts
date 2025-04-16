import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

// REMOVA o @Input da sombra
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() modo: 'mural' | 'formulario' = 'mural';
  @Input() pensamento: string = '';
  @Input() autor: string = '';
  @Input() modelo: string = 'modelo1';

  get sombra(): string {
    switch (this.modelo) {
      case 'modelo1':
        return 'shadow-blue-dark';
      case 'modelo2':
        return 'shadow-blue-light';
      case 'modelo3':
        return 'shadow-green';
      default:
        return '';
    }
  }
}
