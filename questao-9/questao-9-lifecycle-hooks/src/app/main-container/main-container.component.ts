import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent implements OnInit {
  email: string = '';
  nome: string = '';
  estado: string = '';
  cidade: string = '';
  instituicao: string = '';

  estados: string[] = [];
  cidadesDisponiveis: string[] = [];


  cidadesPorEstado: { [estado: string]: string[] } = {
    'SP': ['São Paulo', 'Campinas', 'Santos'],
    'RJ': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
    'PE': ['Recife', 'Vitória de Santo Antão', 'Olinda']
  };

  ngOnInit(): void {
    // preenche os estados com base no objeto de cidades ao INICIAR A APLICACAO
    this.estados = Object.keys(this.cidadesPorEstado);
  }

  atualizarCidades(): void {
    this.cidadesDisponiveis = this.cidadesPorEstado[this.estado] || [];
    this.cidade = ''; // limpa a cidade ao trocar de estado
  }
}
