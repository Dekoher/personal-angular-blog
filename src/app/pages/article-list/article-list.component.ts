import { Component, OnInit } from '@angular/core';
import { Article } from './mock/article';
import { ARTICLES } from './mock/mock-articles';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(articles => (this.articles = articles));
  }
}
