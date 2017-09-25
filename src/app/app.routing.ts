import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const appRoutes: Routes = [
  {
     path: 'home',
     component: HomeComponent
   },
   {
     path:'categories',
     component: CategoriesComponent
   },
   {
     path:'categories/:id',
     component: CategoryDetailsComponent
   },
   {
     path:'categories/:id/posts/:postId',
     component: PostDetailsComponent
   },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
