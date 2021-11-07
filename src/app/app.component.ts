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
    { name: 'Home', path: 'home', block: '#homeBlock' },
    { name: 'Services', path: 'services', block: '#servicesBlock' },
    { name: 'About us', path: 'aboutUs', block: '#aboutUsBlock' },
    { name: 'Contact Us', path: 'contactUs', block: '#contactUs' }
  ];

  goToBlock(blockName: string) {
    var block: HTMLElement = <HTMLElement>document.getElementById(blockName);
    block?.scrollIntoView({ behavior: 'smooth' });
    /* if (blockName != 'homeBlock') {
      setTimeout(() => {
        document.documentElement.scrollTop = document.documentElement.scrollTop + 165;
      }, 1000);
    } */
  }

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

  serviceData = [
    { title: 'Buy Property', image: 'buyProperty.png', content: 'Invest in real estate today and reap the benefits tomorrow. We have huge connectivity to let you choose and buy from.' },
    { title: 'Rent Property', image: 'rentProperty.png', content: 'Discover homes that fit into your price range. Tell us your budget and we will find the best homes for your choice.' },
    { title: 'Resale Property', image: 'resaleProperty.png', content: 'Sell your existing property to make the most out of it. We will direct the right choice of customers to you.' },
    { title: 'Registration and stamps', image: 'registrationAndStamps.png', content: 'Sell your existing property to make the most out of it. We will direct the right choice of customers to you.' }
  ];

  contactData = [
    { image: 'home.png', title: 'Our Office Address', content: 'Malad West, Mumbai, Maharashtra 400064' },
    { image: 'email.png', title: 'General Enquiries', content: 'contact@mysites.com' },
    { image: 'phone.png', title: 'Call Us', content: '+91-8888888888' },
    { image: 'time.png', title: 'Our Office Address', content: 'Mon - Sun : 09:00 AM - 09:00 PM' },
  ]

}
