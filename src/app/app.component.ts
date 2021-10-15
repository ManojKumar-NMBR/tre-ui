import { Component } from '@angular/core';

@Component({
  selector: 'tre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  carouselSlideData = [
    { id: 0, bgImgClass: 'carouselSlide-0', firstText: '', secondText: '', thirdText: '' },
    { id: 1, bgImgClass: 'carouselSlide-1', firstText: '', secondText: '', thirdText: '' },
    { id: 2, bgImgClass: 'carouselSlide-2', firstText: '', secondText: '', thirdText: '' },
    { id: 3, bgImgClass: 'carouselSlide-3', firstText: '', secondText: '', thirdText: '' }
  ];

  getCarouselClass(index: number) {
    return this.carouselSlideData[index].bgImgClass;
  }
}
