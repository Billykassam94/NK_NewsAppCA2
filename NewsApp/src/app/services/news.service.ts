import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult{

  author: String;
  articles: any[];
  title: String;
  publishedAt: String;
  url: String;
}


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

    getLocalNews(page = 1): Observable<ApiResult> {
     return this.http.get<ApiResult>(
      `${environment.baseUrl}/top-headlines?country=ie&apiKey=${environment.apiKey}&page=${page}`);

  }

  getFootballNews(page = 1) {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/everything?q=Football&apiKey=${environment.apiKey}&page=${page}`);

  }

  getGolfNews(page = 1) {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/everything?q=Golf&apiKey=${environment.apiKey}&page=${page}`);

  }




}
