import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecipeInfo, RecipeList } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  dataList: RecipeInfo[] = [];
  private apiKey: string = environment.RECIPE_API_KEY;
  private apiUrl: string = 'https://api.spoonacular.com';

  private http = inject(HttpClient)

  searchRecipes(keyword: string) {
    const url = `${this.apiUrl}/recipes/complexSearch`;
    const params = {
      query: keyword,
      apiKey: this.apiKey,
    };
    return this.http.get(url, { params });
  }

  especificRecipes(id: number) {
    const url = `${this.apiUrl}/recipes/${id}/information`;
    const params = {
      apiKey: this.apiKey,
    };
    return this.http.get(url, { params });
  }

  randomRecipes(limit: number) {
    const url = `${this.apiUrl}/recipes/random`;
    const params = {
      apiKey: this.apiKey,
      number: limit,
      limitLicense: true
    };
    return this.http.get<RecipeList>(url, { params });
  }
}
