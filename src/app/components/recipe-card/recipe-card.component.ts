import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeInfo } from 'src/app/models/recipe.model';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { MinutesPipe } from "../../pipes/minutes.pipe";

@Component({
    selector: 'app-recipe-card',
    standalone: true,
    templateUrl: './recipe-card.component.html',
    styles: [`
    .gluten{
      color: #f5deb3;
    }
    .carrot{
      color: #f49839;
    }
    .milk{
      color: #b8c3c5;
    }
    .dolar {
      color: #85bb65;
    }
    .lungs{
      color: #d4aaab;
    }
    .recycle{
      color: #09710D;
    }
    `],
    imports: [CommonModule, TooltipDirective, MinutesPipe, NgOptimizedImage]
})
export class RecipeCardComponent implements OnInit{
  @Input({ required: true }) recipe!: RecipeInfo;
  @Input({ required: true }) index: number = 0;

  booleanProperties = [
    { key: 'vegetarian', label: 'Vegetariano', iconClass: 'fas fa-carrot carrot' },
    { key: 'vegan', label: 'Vegano', iconClass: 'fas fa-leaf text-success' },
    { key: 'glutenFree', label: 'Libre de gluten', iconClass: 'fa-solid fa-wheat-awn-circle-exclamation gluten' },
    { key: 'dairyFree', label: 'Sin lácteos', iconClass: 'fa-solid fa-glass-water milk' },
    { key: 'veryHealthy', label: 'Muy saludable', iconClass: 'fas fa-apple-alt text-danger' },
    { key: 'cheap', label: 'Económico', iconClass: 'fas fa-dollar-sign dolar' },
    { key: 'veryPopular', label: 'Muy popular', iconClass: 'fas fa-fire text-warning' },
    { key: 'sustainable', label: 'Sostenible', iconClass: 'fa-solid fa-recycle recycle' },
    { key: 'lowFodmap', label: 'Bajo en FODMAP', iconClass: 'fa-solid fa-lungs lungs' }
  ];

  activeProperties: any = []

  private router = inject(Router);

  ngOnInit(): void {
    this.activeProperties = this.booleanProperties.filter(prop =>  this.recipe[prop.key]);
  }


  viewRecipeDetail(recipe: RecipeInfo) {
    this.router.navigate([`/recipe/${recipe.id}`]);
  }


  

  
}
