import { Component } from '@angular/core';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioService } from '../../shared/services/formulario/formulario.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  imports: [CardsComponent, FormsModule, CommonModule],
})
export class FormularioComponent {
  constructor(public formularioService: FormularioService) {}

  get form() {
    return this.formularioService.form;
  }

  get modelos() {
    return this.formularioService.modelos;
  }

  onSubmit() {
    this.formularioService.salvarPensamento();
  }

  onReset() {
    this.formularioService.resetForm();
  }
}
