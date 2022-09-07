import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createProduct, Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // formgroup, vanuit template: [formGroup]="addProductForm"
  // formcontrol, vanuit template: formControlName="name"

  // dirty vs pristine = inhoud control gewijzigd?
  // touched vs untouched = control bezocht?
  // valid vs invalid = komt inhoud control overeen met wat door de Validators wordt afgedwongen

  addProductForm = new FormGroup({
    // houdt waarde & validatiestatus bij voor een hele groep
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z .-]+$/),
    ]), // houdt waarde & validatiestatus bij voor één control
    price: new FormControl(0, Validators.required),
    photo: new FormControl(''),
  });

  products: Product[] = [
    {
      id: 1,
      name: 'witte thee',
      price: 2.99,
      photo:
        'https://static.ah.nl/dam/product/AHI_43545239373932303635?revLabel=3&rendition=200x200_JPG_Q85&fileType=binary',
    },
    {
      id: 2,
      name: 'redbull',
      price: 5.99,
      photo:
        'https://static.ah.nl/dam/product/AHI_43545239373032323838?revLabel=2&rendition=200x200_JPG_Q85&fileType=binary',
    },
    {
      id: 3,
      name: 'bourbon',
      price: 15.99,
      photo:
        'https://static.ah.nl/dam/product/AHI_43545239373231323932?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary',
    },
  ];

  get name() { return this.addProductForm.controls.name }
  get price() { return this.addProductForm.controls.price }
  get photo() { return this.addProductForm.controls.photo }

  hoogOp(product: Product) {
    product.price += 5;
  }

  addProduct() {
    console.log('toevoegen');
    this.products.push(this.addProductForm.value as Product);
    console.log(this.addProductForm.value.name);
    this.addProductForm.reset();
  }
}
