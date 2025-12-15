import { Component } from '@angular/core';
import { Star } from '../star/star';

@Component({
  selector: 'app-portfolio',
  imports: [Star],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  images = [
    { imgSrc: '/images/home.png' },
    { imgSrc: '/images/cake.png' },
    { imgSrc: '/images/home-with-flag.png' },
    { imgSrc: '/images/home.png' },
    { imgSrc: '/images/cake.png' },
    { imgSrc: '/images/home-with-flag.png' },
  ];
  selectedImg = '';
  openImgModal(imgSrc: string) {
    this.selectedImg = imgSrc;
  }
}
