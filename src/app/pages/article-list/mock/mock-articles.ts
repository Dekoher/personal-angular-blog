import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first article',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mi ornare, ornare eros ut, ornare orci. Nulla justo nisi, imperdiet ut malesuada vel, dictum quis tortor. Proin placerat est quis nisi aliquet, eu condimentum ligula porttitor. Fusce posuere tempor feugiat. Mauris porttitor viverra eros. Aenean placerat tellus lobortis nibh convallis tristique. Praesent condimentum a diam et venenatis. Donec aliquet eleifend interdum. Vestibulum ut eros a orci cursus feugiat. Pellentesque imperdiet leo vitae pulvinar ultrices. Nunc varius vel tortor at porta. Aliquam sapien risus, commodo vitae magna non, sollicitudin bibendum mauris. Proin rutrum ipsum nec feugiat fringilla. Aliquam consectetur libero porttitor sem imperdiet, vel ornare velit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    description: 'This is my first article! It is great. Please read it =)',
    key: 'my-first-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png',
  },
  {
    id: 2,
    title: 'My second article',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mi ornare, ornare eros ut, ornare orci. Nulla justo nisi, imperdiet ut malesuada vel, dictum quis tortor. Proin placerat est quis nisi aliquet, eu condimentum ligula porttitor. Fusce posuere tempor feugiat. Mauris porttitor viverra eros. Aenean placerat tellus lobortis nibh convallis tristique. Praesent condimentum a diam et venenatis. Donec aliquet eleifend interdum. Vestibulum ut eros a orci cursus feugiat. Pellentesque imperdiet leo vitae pulvinar ultrices. Nunc varius vel tortor at porta. Aliquam sapien risus, commodo vitae magna non, sollicitudin bibendum mauris. Proin rutrum ipsum nec feugiat fringilla. Aliquam consectetur libero porttitor sem imperdiet, vel ornare velit faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    description: 'Also a great article!!',
    key: 'my-second-article',
    date: new Date(),
    imageUrl:
      'http://angular.io/assets/images/logos/angular/angular_solidBlack.png',
  },
];
