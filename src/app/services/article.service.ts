import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../pages/article-list/mock/article';
import { ARTICLES } from '../pages/article-list/mock/mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
  }

  getArticle(key: string): Observable<Article> {
    const articles: Article[] = ARTICLES.filter(a => a.key === key);
    return of(articles[0]);
  }
}
