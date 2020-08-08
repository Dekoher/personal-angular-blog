import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title = 'About';
  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.titleBlog}`);
  }
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
