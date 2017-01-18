import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES : Hero[] = [
    {id : 1,name : 'Amitava'},
    {id : 2,name : 'Apurba'},
    {id : 3,name : 'Pradeep'}
]
@Component({
  selector: 'my-app',
  template:  `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `,
})
export class AppComponent  { 
    title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
