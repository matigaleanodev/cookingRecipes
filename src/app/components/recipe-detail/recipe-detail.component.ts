import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeInfo } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RecipeIngredientComponent } from '../recipe-ingredient/recipe-ingredient.component';
import { MinutesPipe } from '../../pipes/minutes.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  templateUrl: './recipe-detail.component.html',
  styles: [],
  imports: [
    CommonModule,
    TranslatePipe,
    RecipeIngredientComponent,
    MinutesPipe,
  ],
})
export class RecipeDetailComponent implements OnInit {
  @Input() id?: string;
  recipe!: RecipeInfo;
  viewRecipe: boolean = false;
  private service = inject(RecipesService);
  private router = inject(Router);
  protected ingredient = 'assets/images/ingredients.png';
  protected instructions = 'assets/images/instructions.png';
  protected stepimg = 'assets/images/step.png';

  visibleIcons: string[] = [];

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe() {
    const id = Number(this.id);
    this.service.especificRecipes(id).subscribe({
      next: (recipe: RecipeInfo) => {
        this.setRecipe(recipe);
      },
    });
  }

  setRecipe(recipe: RecipeInfo) {
    if (recipe) {
      this.recipe = recipe;
      this.viewRecipe = true;
    }
    if (this.recipe.vegan) {
      this.visibleIcons.push('vegan');
    }
    if (this.recipe.vegetarian) {
      this.visibleIcons.push('vegetarian');
    }
    if (this.recipe.veryPopular) {
      this.visibleIcons.push('popular');
    }
    if (this.recipe.veryHealthy) {
      this.visibleIcons.push('healthy');
    }
    if (this.recipe.glutenFree) {
      this.visibleIcons.push('gluten-free');
    }
    if (this.recipe.dairyFree) {
      this.visibleIcons.push('dairy-free');
    }
  }

  name(name: string): string {
    switch (name) {
      case 'gluten-free':
        return 'Gluten free';
      case 'dairy-free':
        return 'Dairy free';
      default:
        return name;
    }
  }

  viewSimilarRecipe(recipe: RecipeInfo) {
    this.router.navigate([`/similar/${recipe.id}`]);
  }

}
