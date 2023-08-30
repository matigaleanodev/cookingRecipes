import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeInfo } from 'src/app/models/recipe.model';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipesService } from 'src/app/services/recipes.service';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-recipe-similar',
  standalone: true,
  templateUrl: './recipe-similar.component.html',
  styles: [],
  animations: [fadeInOnEnterAnimation()],
  imports: [CommonModule, RecipeCardComponent],
})
export class RecipeSimilarComponent implements OnInit {
  @Input() id?: string;
  recipe!: RecipeInfo;
  viewList: boolean = false;

  protected recipeList: RecipeInfo[] = [];
  private service = inject(RecipesService);

  ngOnInit(): void {
    this.getRecipeList()
  }

  getRecipeList() {
    const id = Number(this.id)
    this.service.similarRecipes(id).subscribe({
      next: (value) => {
        this.recipeList = value;
        console.log(value)
        this.viewList = true;
      },
    });
  }
}
