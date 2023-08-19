import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipeInfo } from 'src/app/models/recipe.model';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  private service = inject(RecipesService);
  protected recipeList: RecipeInfo[] = [];
  viewList: boolean = false;

  ngOnInit(): void {
    this.getRecipeList();
  }

  getRecipeList() {
    const data = this.service.dataList;
    if(data.length >= 1){
      this.recipeList = data;
      this.viewList = true;
    } else {
      this.service.randomRecipes(10).subscribe({
        next: (value) => {
          this.recipeList = value.recipes;
          this.service.dataList = value.recipes;
          this.viewList = true;
        },
      });
    }
  }
}
