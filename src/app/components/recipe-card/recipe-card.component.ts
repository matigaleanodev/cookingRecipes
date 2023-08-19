import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecipeInfo } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styles: [],
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: RecipeInfo;

  private router = inject(Router);

  viewRecipeDetail(recipe: RecipeInfo) {
    this.router.navigate(['/recipe', recipe.id], { state: { recipe } });
  }
}
