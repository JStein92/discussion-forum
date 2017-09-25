import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Post} from "../post.model";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
 @Output() newPostSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submitForm(title:string, content:string){
    let newPost : Post = new Post(title, content);
    this.newPostSender.emit(newPost);
  }

}
