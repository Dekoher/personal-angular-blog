import { Component, OnInit } from '@angular/core';
import { Article } from './mock/article';
import { ARTICLES } from './mock/mock-articles';
import { ArticleService } from '../../services/article/article.service';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.sharedService.titleBlog}`);
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
