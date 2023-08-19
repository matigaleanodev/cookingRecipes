import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  protected logo = 'assets/images/logo.png'
  protected title = 'Recipe Food Tracker'
}
