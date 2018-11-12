import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  private httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  getPosts(): any {
    return this.httpClient.get('https://172.29.38.244:9192/api/posts');
  }

  getPostsFiltered(first: number, last: number): any {

    return this.httpClient.get('https://172.29.38.244:9192/api/posts?startIndex=' + first + '&endIndex=' + last);

  }
}
