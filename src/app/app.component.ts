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

  aboutUsData = [
    { name: 'Mr. K. SRINIVAS REDDY', designation : 'Founder & Managing Director',image: 'buyProperty.png', about: 'He is the Managing Director of Shathabdhi Townships, Sri. K. Srinivasareddy is a successful real estate professional for more than a decade, his success has been due to his clear cut vision and long term planning is making the company Prosper the company year after year.' },
    { name: 'K. LAXMI',designation : 'Director', image: 'rentProperty.png', about: 'She is one of the Directors of Shathabdhi Townships. Contributing her valuable suggestions and advice time and again to the Director, She has been an active board member diligently working towards the growth and progress of Shathabdhi Townships.' },
    { name: 'K.VENUMADHAV REDDY',designation : 'Director', image: 'resaleProperty.png', about: 'The youngest and the most dynamic among the Directors, Venumadhav Reddy has been playing a vital role in the planning and execution of the ventures. Being a youngster, he has his own innovative approach towards the projects and all endeavors have been quite successful. Playing an important role in all the ventures of Shathabdhi Townships, He is the young promising face of Shathabdhi Townships.' },
    { name: 'K. ARUNA DEVI',designation : 'Director', image: 'registrationAndStamps.png', about: 'Being one of the most important Directors of Shathabdhi Townships, She hasn’t been sparing no stone un-turned in making every project a successful venture. Thanks to her foresightedness, all her efforts to make ventures of Shathabdhi Townships a trust-worthy, reliable and investor-friendly have been yielding good results.' }
  ];

}
