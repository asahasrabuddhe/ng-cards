import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {CardComponent} from "./card/card.component";
import {UnsplashService} from "./unsplash.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, CardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private unsplash: UnsplashService) {
  }

  ngOnInit() {
    this.posts = this.unsplash.getPosts()
  }

  posts: Post[] = [
    {title: 'Neat Tree', imageUrl: 'img/tree.jpeg', username: '@nature', content: 'Saw this awesome tree during my hike today.'},
    {title: 'Snowy Mountain', imageUrl: 'img/mountain.jpeg', username: '@hikingperson', content: 'Beautiful view of some mountains I saw during my hike.'},
    {title: 'Mountain Biking', imageUrl: 'img/biking.jpeg', username: '@biking12222', content: 'Action shot of me riding my bike.'},
  ]
}

class Post {
  title: string = '';
  imageUrl: string = '';
  username: string = ''
  content: string = '';
}
