import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy {
  intervalId = 0;

  @Input()
  message = '';

  @Input()
  products: Product[] = [];

  constructor() { 
    console.log('😀', 'constructor')
  }
  
  ngOnInit(): void {
    console.log('%c 😀 OnInit', 'background: lightgreen');

    this.intervalId = window.setInterval(() => {
      console.log('👀 hallo vanuit interval');
    }, 1000);
  }
  
  ngOnDestroy(): void {
    console.log('%c 😀 OnDestroy', 'background: red');
    window.clearInterval(this.intervalId);
  }
}
