import { Injectable } from '@angular/core';
import { Category} from './category.model';
import {allCategories} from './mock-categories';
@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(){
    return allCategories;
  }

  getCategoryById(cateogoryId: number){
    for (let i = 0; i < allCategories.length; i++) {
        if (cateogoryId === allCategories[i].id){
          return allCategories[i];
        }
    }
  }

}
