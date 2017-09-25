import { Injectable } from '@angular/core';
import { Post } from './post.model';
import {allCategories} from './mock-categories';
@Injectable()
export class PostService {

  getPostContent(selectedPost: Post){
    return selectedPost.content;
  }

  getSelectedPost(selectedCategoryId: number,selectedPostId:number){
    let selectedCategory= null;
    for (let i = 0; i < allCategories.length; i++) {
        if (selectedCategoryId === allCategories[i].id){
            selectedCategory =  allCategories[i];
        }
    }
    for (let i = 0; i <selectedCategory.posts.length; i++) {

        if (selectedCategory.posts[i].id === selectedPostId){
          return selectedCategory.posts[i];
        }
    }
  }
  constructor() { }
}
