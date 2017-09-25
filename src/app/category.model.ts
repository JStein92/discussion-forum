import { Post } from './post.model';
let globalId : number = 0;
export class Category {
  constructor(
    public name: string,
    public posts: Post[],
    public header: string
  ){}

   public id : number = globalId++;
}
