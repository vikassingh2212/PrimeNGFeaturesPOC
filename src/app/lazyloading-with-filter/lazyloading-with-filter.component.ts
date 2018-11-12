import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../Core/posts-service.service';
import { Post } from '../Model/Post';
import { LazyLoadEvent } from 'primeng/primeng';

@Component({
  selector: 'app-lazyloading-with-filter',
  templateUrl: './lazyloading-with-filter.component.html',
  styleUrls: ['./lazyloading-with-filter.component.css']
})
export class LazyloadingWithFilterComponent implements OnInit {

  pageSizeOptions: any[];
  pageSize: number;
  totalRecords: number;
  posts: Post[];
  datasource: Post[];
  cols: any[];

  loading: boolean;

  /**
   *
   */
  constructor(private postService: PostsServiceService) {

    this.pageSizeOptions = [5, 10, 20, 30, 40, 50];
    this.pageSize = this.pageSizeOptions[0];
  }


  ngOnInit() {

    this.postService.getPostsFiltered(1, 5).subscribe(posts => {

      this.posts = posts;
      this.totalRecords = 100;

    });

    this.cols = [
      { field: 'userId', header: 'UserID' },
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'body', header: 'Body' }
    ];

    this.loading = true;
  }

  loadPostsLazy(event: LazyLoadEvent) {
    this.loading = true;

    // in a real application, make a remote request to load data using state metadata from event
    // event.first = First row offset
    // event.rows = Number of rows per page
    // event.sortField = Field name to sort with
    // event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    // filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    // imitate db connection over a network

    console.log(event);
    console.log(event.first, (event.first + event.rows));


    this.postService.getPostsFiltered(event.first, (event.first + event.rows)).subscribe(posts => {
      this.posts = posts;
      this.totalRecords = 100;

      this.loading = false;
    });
  }
}
