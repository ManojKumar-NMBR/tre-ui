import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

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
  ];

  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.cdf.detectChanges();
  }


  @ViewChild('scrollMe') myScrollContainer!: ElementRef;
  getNavBarClass() {
    // console.log(this.myScrollContainer);
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;


    if (document.documentElement.scrollTop && document.documentElement.scrollTop > 5)
      return 'navBarTransparent';
    else
      return '';
  }

  getCarouselClass(index: number) {
    return this.carouselSlideData[index].bgImgClass;
  }

}
