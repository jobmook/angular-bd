import { Component } from '@angular/core';
import { createProduct, Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // newProduct = {} as Product;
  newProduct = createProduct();

  products: Product[] = [
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

  hoogOp(product: Product) {
    product.price += 5;
  }

  onSubmit() {
    console.log('toevoegen', this.newProduct);
    this.products.push(this.newProduct);
    // this.newProduct = {} as Product;
    this.newProduct = createProduct();
  }

}
