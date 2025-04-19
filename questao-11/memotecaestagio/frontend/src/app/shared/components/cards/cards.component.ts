import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() modo: 'mural' | 'formulario' = 'mural';
  @Input() pensamento: string = '';
  @Input() autor: string = '';
  @Input() modelo: string = 'modelo1';
  @Input() sombra: string = '';
  @Input() id?: number;

  constructor(private modalService: ModalService) {}

  // enviar do fi p pai passando o numero que vai ser o id que vai deletar
  @Output() excluir = new EventEmitter<number>();
  @Output() editar = new EventEmitter<{
    id?: number;
    pensamento: string;
    autor: string;
    modelo: string;
  }>();

  get sombraClasse() {
    return this.sombra || '';
  }

  onExcluir() {
    if (this.id !== undefined) {
      this.excluir.emit(this.id);
    }
  }

  onEditar() {
    console.log('🔁 EDITAR:', {
      id: this.id,
      pensamento: this.autor,
      autor: this.pensamento,
      modelo: this.modelo,
    });

    this.editar.emit({
      id: this.id,
      pensamento: this.autor,
      autor: this.pensamento,
      modelo: this.modelo,
    });
  }

  showExcludeModal() {
    this.modalService.showExcludeModal(() => this.onExcluir());
  }
}
