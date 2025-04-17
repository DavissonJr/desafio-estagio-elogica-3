import { Component, OnInit } from '@angular/core';
import { MuralService } from '../../shared/services/mural/mural.service';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [CardsComponent, RouterModule],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent implements OnInit {
  paginaAtual = 0;
  itensPorPagina = 6;

  constructor(public muralService: MuralService) {}

  async ngOnInit() {
    await this.muralService.carregarPensamentos();
  }

  pensamentosPaginados() {
    const inicio = this.paginaAtual * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    //slice -> "fatiar o array"
    return this.muralService.pensamentos.slice(inicio, fim);
  }

  proximaPagina() {
    if (this.temProximaPagina()) {
      this.paginaAtual++;
    }
  }

  paginaAnterior() {
    if (this.temPaginaAnterior()) {
      this.paginaAtual--;
    }
  }

  temProximaPagina() {
    return (this.paginaAtual + 1) * this.itensPorPagina < this.muralService.pensamentos.length;
  }

  temPaginaAnterior() {
    return this.paginaAtual > 0;
  }

  async excluirPensamento(id: number) {
    await this.muralService.excluirPensamento(id);

    // se você estiver na última página e excluir tudo dela, volta para a anterior
    // math.ceil() arredonda um número para cima, ou seja, para o próximo inteiro maior ou igual ao número original
    const totalPaginas = Math.ceil(this.muralService.pensamentos.length / this.itensPorPagina);
    if (this.paginaAtual >= totalPaginas) {
      this.paginaAtual = Math.max(0, totalPaginas - 1);
    }
  }
}
