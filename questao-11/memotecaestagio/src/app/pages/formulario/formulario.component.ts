import { Component } from '@angular/core';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  imports: [CardsComponent, FormsModule, CommonModule],
})
export class FormularioComponent {
  form = {
    pensamento: '',
    autor: '',
    modelo: 'modelo1',
  };

  modelos = ['modelo1', 'modelo2', 'modelo3'];
}
