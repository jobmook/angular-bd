import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products = [
    {
      id: 1,
      name: 'witte thee',
      price: 2.99,
      photo: 'https://static.ah.nl/dam/product/AHI_43545239373932303635?revLabel=3&rendition=200x200_JPG_Q85&fileType=binary',
    },
    {
      id: 2,
      name: 'redbull',
      price: 5.99,
      photo: 'https://static.ah.nl/dam/product/AHI_43545239373032323838?revLabel=2&rendition=200x200_JPG_Q85&fileType=binary',
    },
    {
      id: 3,
      name: 'bourbon',
      price: 15.99,
      photo: 'https://static.ah.nl/dam/product/AHI_43545239373231323932?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary',
    },
  ];

  hoogOp(product: any) {
    product.price += 5;
  }

}
