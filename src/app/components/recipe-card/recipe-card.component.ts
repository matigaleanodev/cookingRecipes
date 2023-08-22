import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeInfo } from 'src/app/models/recipe.model';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { MinutesPipe } from "../../pipes/minutes.pipe";

@Component({
    selector: 'app-recipe-card',
    standalone: true,
    templateUrl: './recipe-card.component.html',
    styles: [],
    imports: [CommonModule, TooltipDirective, MinutesPipe]
})
export class RecipeCardComponent implements OnInit{
  @Input({ required: true }) recipe!: RecipeInfo;

  booleanProperties = [
    { key: 'vegetarian', label: 'Vegetariano', iconClass: 'fas fa-leaf' },
    { key: 'vegan', label: 'Vegano', iconClass: 'fas fa-carrot' },
    { key: 'glutenFree', label: 'Libre de gluten', iconClass: 'fas fa-bread-slice' },
    { key: 'dairyFree', label: 'Sin lácteos', iconClass: 'fas fa-cheese' },
    { key: 'veryHealthy', label: 'Muy saludable', iconClass: 'fas fa-apple-alt' },
    { key: 'cheap', label: 'Económico', iconClass: 'fas fa-dollar-sign' },
    { key: 'veryPopular', label: 'Muy popular', iconClass: 'fas fa-fire' },
    { key: 'sustainable', label: 'Sostenible', iconClass: 'fas fa-leaf' },
    { key: 'lowFodmap', label: 'Bajo en FODMAP', iconClass: 'fas fa-poop' }
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
