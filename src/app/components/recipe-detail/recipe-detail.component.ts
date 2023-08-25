import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RecipeInfo } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { TranslatePipe } from "../../pipes/translate.pipe";
import { RecipeIngredientComponent } from '../recipe-ingredient/recipe-ingredient.component';

@Component({
    selector: 'app-recipe-detail',
    standalone: true,
    templateUrl: './recipe-detail.component.html',
    styles: [],
    imports: [CommonModule, TranslatePipe, RecipeIngredientComponent, NgOptimizedImage]
})
export class RecipeDetailComponent implements OnInit {
  @Input() id?: string; 
  recipe!: RecipeInfo;
  viewRecipe: boolean = false;
  private service = inject(RecipesService);
  protected ingredient = 'assets/images/ingredients.png'
  protected instructions = 'assets/images/instructions.png'
  protected stepimg = 'assets/images/step.png'

  ngOnInit() {
    this.setRecipe();
  }

  setRecipe(){
    const data = this.service.getDataStorage();
    const recipe = data.find(i => i.id === Number(this.id))
    if(recipe){
      this.recipe = recipe;
      this.viewRecipe = true;
    }
  }
}
