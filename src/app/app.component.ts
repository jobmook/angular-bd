import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createProduct, Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toonLifecycle = true;
  parentMessage = 'Hallo vanuit parent';

  toggleLifecycle(): void {
    this.toonLifecycle = !this.toonLifecycle
  }

  // In deze demo 2 hoofdrolspelers:
  // 😎 FormGroup, vanuit template: [formGroup]="addProductForm"
  // 😀 FormControl, vanuit template: formControlName="name"

  // dirty    vs  pristine    = inhoud control gewijzigd?
  // touched  vs  untouched   = control bezocht?
  // valid    vs  invalid     = komt inhoud control overeen met wat
  //                            door de Validators wordt afgedwongen

  // 😎 FormGroup houdt waarde & validatiestatus bij voor een hele groep
  addProductForm = new FormGroup({
    // 😀 FormControl houdt waarde & validatiestatus bij voor één control
    name: new FormControl('', {
      validators: [Validators.required, Validators.pattern(/^[a-zA-Z .-]+$/)],
      nonNullable: true, // reset() = spring terug naar default value,
      // in dit geval '', in plaats van naar null
    }),
    price: new FormControl(0, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    photo: new FormControl('', {
      nonNullable: true,
    }),
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

  // helper methods
  get name() {
    return this.addProductForm.controls.name;
  }
  get price() {
    return this.addProductForm.controls.price;
  }
  get photo() {
    return this.addProductForm.controls.photo;
  }

  hoogOp(product: Product) {
    product.price += 5;
  }

  addProduct() {
    const value = this.addProductForm.getRawValue();
    this.products.push(value);
    this.addProductForm.reset();
  }
}
