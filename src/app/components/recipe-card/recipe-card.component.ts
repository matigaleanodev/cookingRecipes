import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeInfo } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styles: [
  ]
})
export class RecipeCardComponent {
 @Input({required: true})recipe!: RecipeInfo
}
