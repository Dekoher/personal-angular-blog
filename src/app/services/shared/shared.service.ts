import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  titleBlog = 'Diegoher Blog';
  baseUrl = 'http://localhost:4200';
  constructor() { }
}
