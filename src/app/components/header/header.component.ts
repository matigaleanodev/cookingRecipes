import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  protected logo = 'assets/images/recipe.png'
  protected title = 'Recipe Food Tracker'
}
