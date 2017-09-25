import { Component, OnInit } from '@angular/core';
import {Category} from '../category.model';
import {Post} from "../post.model";
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit{

constructor(private router: Router, private categoryService: CategoryService){}

allCategories : Category[];


ngOnInit() {
  this.allCategories = this.categoryService.getCategories();

}

goToDetailsPage(category: Category ){
this.router.navigate(['categories',category.id]);
}

}
