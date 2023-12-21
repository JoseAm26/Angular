
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Contador: {{ numero }}</p>

    <button (click)="incrementar(1)" class="btn btn-btn btn-success mx-2 my-2"> +1 </button>
    <button (click)="reset()" class="btn btn-btn btn-success mx-2 my-2">Reset</button>
    <button (click)="decrementar(1)" class="btn btn-btn btn-success mx-2 my-2"> -1 </button>
  `
})

export class CounterComponent {
  nombre = 'Nombre';
  numero = 10;

  incrementar( value: number ): void{
    this.numero += value;
  }

  decrementar( value: number ): void{
    this.numero -= value;
  }

  reset(): void{
    this.numero = 10;
  }

}
