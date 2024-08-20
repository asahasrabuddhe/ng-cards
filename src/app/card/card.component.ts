import { Component, Input } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() username: string = '';
  @Input() content: string = '';
}
