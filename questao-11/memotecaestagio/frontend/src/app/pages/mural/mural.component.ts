import { Component } from '@angular/core';
import { MuralService } from '../../shared/services/mural/mural.service';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [CardsComponent, RouterModule],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent {
  constructor(public muralService: MuralService) {}

  pensamentos() {
    return this.muralService.pensamentos;
  }
}
