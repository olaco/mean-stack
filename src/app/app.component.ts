import { Component } from '@angular/core';
// import { PostCreateComponent } from './posts/posts-create/posts-create.component';
import {Post} from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  storedPost: Post[]= [];


  onPostAdded(post:Post){

    this.storedPost.push(post)
  }
}
