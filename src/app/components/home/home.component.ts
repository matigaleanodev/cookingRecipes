import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipeInfo } from 'src/app/models/recipe.model';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { DelayDirective } from 'src/app/directives/delay.directive';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent, DelayDirective],
  templateUrl: './home.component.html',
  styles: [],
  animations: [fadeInOnEnterAnimation()
    // trigger('fadeIn', [
    //   transition(':enter', [
    //     style({ opacity: 0, transform: 'translateX(100%)' }),
    //     animate('1300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
    //   ]),
    // ]),
  ],
})
export class HomeComponent implements OnInit {
  private service = inject(RecipesService);
  protected recipeList: RecipeInfo[] = [];
  viewList: boolean = false;

  ngOnInit(): void {
    this.getRecipeList();
  }
 

  getRecipeList() {
    const data = this.service.getDataStorage();
    if (data.length >= 1) {
      data.forEach((i) => {
        setTimeout(() => {
          this.recipeList.push(i);
        }, 1000);
      });
      this.service.dataList = data;
      this.viewList = true;
    } else {
      this.service.randomRecipes(12).subscribe({
        next: (value) => {
          value.recipes.forEach((i) => {
            setTimeout(() => {
              this.recipeList.push(i);
            }, 1000);
          });
          this.service.dataList = value.recipes;
          this.service.setDataStorage(this.recipeList);
          this.viewList = true;
        },
      });
    }
  }

}
