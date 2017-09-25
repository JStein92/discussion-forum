import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import {Post} from "../post.model";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
    providers: [CategoryService, PostService]
})
export class CategoryDetailsComponent implements OnInit {
  categoryId: number;
  categoryToDisplay: Category;
  selectedPost : Post = null;

    constructor(private router: ActivatedRoute, private postRouter: Router, private location: Location,   private categoryService: CategoryService, private postService: PostService) {}

    ngOnInit() {
      this.router.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['id']);
    });
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
  }

  editPost(post){
    console.log('test');
    this.selectedPost=post;
  }
  upvote(post){
    post.points++;
  }
  downvote(post){
    post.points--;
  }
  deletePost(post){
    let startPoint = (this.categoryToDisplay.posts[0].id);
    this.categoryToDisplay.posts.splice(startPoint - post.id,1);
    for (let i = 0; i < this.categoryToDisplay.posts.length; i++) {
        this.categoryToDisplay.posts[i].id = i;
    }
  }

  goToDetailsPage(post: Post){
    this.postRouter.navigate(['categories',this.categoryToDisplay.id,'posts',post.id]);
  }

  newPost(postToAdd){
    this.categoryToDisplay.posts.push(postToAdd);
  }

}
