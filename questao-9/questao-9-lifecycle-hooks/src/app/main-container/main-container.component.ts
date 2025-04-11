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
  instituicao: string = '';

  estados: string[] = [];
  cidadesDisponiveis: string[] = [];

  // getter e setter para "estado" com lógica embutida (tipo um ngOnChange)
  private _estado: string = '';

  get estado(): string {
    return this._estado;
  }

  set estado(value: string) {
    this._estado = value;
    this.atualizarCidades();
    console.log(`Estado alterado para: ${value}`); // so p debugar
  }

  cidade: string = '';

  // objeto que mapeia estados às suas respectivas cidades
  cidadesPorEstado: { [estado: string]: string[] } = {
    SP: ['São Paulo', 'Campinas', 'Santos'],
    RJ: ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
    PE: ['Recife', 'Vitória de Santo Antão', 'Olinda'],
  };

  // executado assim que o componente for inicializado
  ngOnInit(): void {
    // preenche os estados a partir das chaves do objeto cidadesPorEstado
    this.estados = Object.keys(this.cidadesPorEstado);
    alert("BEM VINDO!")
  }

  // atualiza as cidades disponíveis com base no estado selecionado
  atualizarCidades(): void {
    this.cidadesDisponiveis = this.cidadesPorEstado[this.estado] || [];
    this.cidade = ''; // limpa a cidade atual, forçando nova escolha
  }

  // método chamado no HTML via (ngModelChange) para atualizar o estado
  onEstadoChange(novoEstado: string): void {
    this.estado = novoEstado; //atualiza tudo
  }
}
