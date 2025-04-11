import { Component } from '@angular/core';
import { MainContainerComponent } from "./main-container/main-container.component";

@Component({
  selector: 'app-root',
  imports: [MainContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'questao-9-lifecycle-hooks';
}
