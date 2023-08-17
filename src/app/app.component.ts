import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './pipes/translate.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslatePipe, FormsModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'cookingRecipes';
  originalText = 'Hello, world!';
  targetLanguage = 'es';
}