import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../Core/posts-service.service';
import { Post } from '../Model/Post';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {

  pageSizeOptions: any[];
  pageSize: number;
  posts: Post[];
  cols: any[];

  constructor(private postService: PostsServiceService) { 
    this.pageSizeOptions = [5, 10, 20, 30, 40, 50];
    this.pageSize = this.pageSizeOptions[0];
  }

  ngOnInit() {

    this.postService.getPosts().subscribe(posts => this.posts = posts);

    this.cols = [
      { field: 'userId', header: 'UserID' },
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Body' }
    ];
  }

}
