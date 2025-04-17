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
  constructor(public muralService: MuralService) {}

  async ngOnInit() {
    await this.muralService.carregarPensamentos();
  }

  pensamentos() {
    return this.muralService.pensamentos;
  }

  async excluirPensamento(id: number) {
    await this.muralService.excluirPensamento(id);
  }
}
