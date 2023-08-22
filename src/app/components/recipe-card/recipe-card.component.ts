import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeInfo } from 'src/app/models/recipe.model';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  templateUrl: './recipe-card.component.html',
  styles: [],
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: RecipeInfo;

  private router = inject(Router);


  viewRecipeDetail(recipe: RecipeInfo) {
    this.router.navigate([`/recipe/${recipe.id}`]);
  }
}
