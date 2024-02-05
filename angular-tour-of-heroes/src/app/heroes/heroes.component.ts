import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    HeroDetailComponent,
    NgFor
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];

  selectedHero!: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) {}
}
