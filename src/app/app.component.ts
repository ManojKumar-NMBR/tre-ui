import { Component } from '@angular/core';

@Component({
  selector: 'tre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  carouselSlideData = [
    { id: 0, bgImgClass: 'carouselSlide-0', firstText: 'First', secondText: '', thirdText: '' },
    { id: 1, bgImgClass: 'carouselSlide-1', firstText: 'Second', secondText: '', thirdText: '' },
    { id: 2, bgImgClass: 'carouselSlide-2', firstText: 'Third', secondText: '', thirdText: '' },
    { id: 3, bgImgClass: 'carouselSlide-3', firstText: 'Fourth', secondText: '', thirdText: '' }
  ];

  pageMenus = [
    { name: 'Home', path: 'home' },
    { name: 'Features', path: 'features' },
    { name: 'About', path: 'about' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'Friends', path: 'friends' },
    { name: 'Testimonial', path: 'testimonial' },
    { name: 'Contact', path: 'contact' }
  ]

  getCarouselClass(index: number) {
    return this.carouselSlideData[index].bgImgClass;
  }
}
