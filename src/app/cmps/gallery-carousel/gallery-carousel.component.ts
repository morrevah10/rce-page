import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss']
})
export class GalleryCarouselComponent {
  images1: string[] = [
    '../../../assets/imges/1/1.jpg',
    '../../../assets/imges/1/2.jpg',
    '../../../assets/imges/1/3.jpg',
    '../../../assets/imges/1/4.jpg',
    '../../../assets/imges/1/5.jpg',
    '../../../assets/imges/1/6.jpg',
    '../../../assets/imges/1/7.jpg',
    '../../../assets/imges/1/8.jpg',
    '../../../assets/imges/1/9.jpg',
    '../../../assets/imges/1/10.jpg',
  ];

  images2: string[] = [
      '../../../assets/imges/2/1.jpg',
      '../../../assets/imges/2/2.jpg',
      '../../../assets/imges/2/3.jpg',
      '../../../assets/imges/2/4.jpg',
      '../../../assets/imges/2/5.jpg',
      '../../../assets/imges/2/6.jpg',
      '../../../assets/imges/2/7.jpg',
      '../../../assets/imges/2/8.jpg',
      '../../../assets/imges/2/9.jpg',
      '../../../assets/imges/2/10.jpg',
    ];

    images3: string[] = [
      '../../../assets/imges/3/1.jpg',
      '../../../assets/imges/3/2.jpg',
      '../../../assets/imges/3/3.jpg',
      '../../../assets/imges/3/4.jpg',
      '../../../assets/imges/3/5.jpg',
      '../../../assets/imges/3/6.jpg',
      '../../../assets/imges/3/7.jpg',
      '../../../assets/imges/3/8.jpg',
      '../../../assets/imges/3/9.jpg',
      '../../../assets/imges/3/10.jpg',
    ];

}
