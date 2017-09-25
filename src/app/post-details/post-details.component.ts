import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import {PostService} from '../post.service';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [CategoryService, PostService]
})
export class PostDetailsComponent implements OnInit {

  constructor(private mainRouter: Router, private categoryService: CategoryService, private router: ActivatedRoute, private location: Location,  private postService: PostService) { }
  categoryId : number;
  postId : number;
  postToDisplay: Post = null;
  categoryToDisplay: Category;
  ngOnInit() {
      this.router.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['postId']);
      this.categoryId = parseInt(urlParameters['id']);
    });
    this.postToDisplay = this.postService.getSelectedPost(this.categoryId,this.postId);
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
  }

  goToDetailsPage(category: Category ){
    this.mainRouter.navigate(['categories',category.id]);
  }

}
