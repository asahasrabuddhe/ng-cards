import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  constructor(private client: HttpClient) {
  }

  getPosts() {
    const posts: Post[] = [];

    this.client
      .get<any[]>(`https://api.unsplash.com/photos/random?count=3&client_id=${environment.unsplash_access_key}`)
      .subscribe({
        next: images => {
          for (const image of images) {
            posts.push({
              title: image.alt_description,
              imageUrl: image.urls.regular,
              username: image.user?.instagram_username ? image.user.instagram_username : image.user.username,
              content: image.description ? image.description : image.alt_description,
            })
          }
        },
        error: error => console.error(error)
      })

    return posts;
  }
}
