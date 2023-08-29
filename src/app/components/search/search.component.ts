import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideInDownOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  animations: [ slideInDownOnEnterAnimation()],
  styles: [
  ]
})
export class SearchComponent {

}
