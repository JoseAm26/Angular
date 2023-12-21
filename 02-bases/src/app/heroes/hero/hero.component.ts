import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironmaiden';
  public age : number = 35;

  get capitaliceName(): string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  chageHero(): void {
    this.name = 'Spidi';
  }

  chageAge(): void {
    this.age = 26;
  }

  resetForm(): void {
    this.name = 'ironmaiden';
    this.age = 35;

    // document.querySelectorAll('h1')!.forEach (element => {
    //   element.innerHTML = '<h1>Desde angular</h1>'
    // })

  }


}
