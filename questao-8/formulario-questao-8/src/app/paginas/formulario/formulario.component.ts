import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  email: string = '';
  nome: string = '';
  telefone: string = '';
  dataNascimento: string = '';

  submitted: boolean = false;

  // regex para validação de email e telefone
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/;

  // validar formulário
  isValid(field: string): boolean {
    switch (field) {
      case 'nome':
        return this.nome.trim().length > 0;
      case 'email':
        return this.emailRegex.test(this.email);
      case 'telefone':
        return this.telefoneRegex.test(this.telefone);
      case 'dataNascimento':
        return this.dataNascimento.trim().length > 0;
      default:
        return true;
    }
  }

  getClass(field: string): string {
    if (!this.submitted) return '';
    return this.isValid(field) ? 'is-valid' : 'is-invalid';
  }

  onSubmit() {
    this.submitted = true;
  
    const form = document.getElementById('form') as HTMLFormElement;
  
    const allValid = this.isValid('nome') &&
                     this.isValid('email') &&
                     this.isValid('telefone') &&
                     this.isValid('dataNascimento');
  
    if (allValid) {
      alert('formulário válido');
      form.reset(); 
    } else {
      alert('preencha os campos corretamente.');
    }
  }
}