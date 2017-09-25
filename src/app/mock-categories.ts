import { Category } from './category.model';
import { Post } from './post.model';


export const  allCategories: Category[] = [
  new Category("Travel", [ new Post("Best Backpacks", "Where do I get the best travel packs?"),
    new Post("Hawaii", "Favorite island?")], "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Blogimage.2e16d0ba.fill-1440x810.png"),
  new Category("Technology", [new Post("Motherboard Options", "Where do I get a good motherboard? Thx"),
   new Post("Monitors at 144Hz", "Are 144hz Monitors worth it?")], "https://www.thewealthadvisor.com/sites/default/files/2017-07/tech-724x384_2.jpg")
]
