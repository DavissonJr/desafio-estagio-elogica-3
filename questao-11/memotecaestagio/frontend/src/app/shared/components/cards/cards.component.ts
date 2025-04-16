import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() modo: 'mural' | 'formulario' = 'mural';
  @Input() pensamento: string = '';
  @Input() autor: string = '';
  @Input() modelo: string = 'modelo1';
  @Input() sombra: string = '';
}
