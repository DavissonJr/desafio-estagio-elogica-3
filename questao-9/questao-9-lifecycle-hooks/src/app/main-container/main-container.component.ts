import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent implements OnInit, OnDestroy {
  email: string = '';
  nome: string = '';
  instituicao: string = '';
  estados: string[] = [];
  cidadesDisponiveis: string[] = [];
  cidade: string = '';
  private componentStartTime: Date = new Date();

  private _estado: string = '';

  get estado(): string {
    return this._estado;
  }

  set estado(value: string) {
    this._estado = value;
    this.atualizarCidades();
    console.log(`Estado alterado para: ${value}`);
  }

  cidadesPorEstado: { [estado: string]: string[] } = {
    SP: ['São Paulo', 'Campinas', 'Santos'],
    RJ: ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
    PE: ['Recife', 'Vitória de Santo Antão', 'Olinda'],
  };

  ngOnInit(): void {
    this.componentStartTime = new Date(); // atualiza na inicialização
    console.log(`Horário inicializado: ${this.componentStartTime}`)
    this.estados = Object.keys(this.cidadesPorEstado);
  }

  atualizarCidades(): void {
    this.cidadesDisponiveis = this.cidadesPorEstado[this.estado] || [];
    this.cidade = '';
  }

  fecharFormulario() {
    this.limparDados();
  }

  limparDados() {
    const endTime = new Date();
    const duration = (endTime.getTime() - this.componentStartTime.getTime()) / 1000;

    console.log(`Formulário cancelado após ${duration.toFixed(2)} segundos`);

    if (this.email || this.nome || this.instituicao) {
      console.warn('Dados não submetidos:', {
        nome: this.nome,
        email: this.email,
        instituicao: this.instituicao,
        estado: this.estado,
        cidade: this.cidade
      });

      // limpa os dados
      this.nome = '',
      this.email = '',
      this.instituicao = '',
      this.estado = '',
      this.cidade = ''
    }
  }

  // chama o lifecycle hook on destroy
  ngOnDestroy(): void {
    this.limparDados();
  }
}
