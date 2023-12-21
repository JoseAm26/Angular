import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['Spiderman', 'Batman', 'Ironman'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroName.pop();
    // console.log(deletedHero)
  }

}
