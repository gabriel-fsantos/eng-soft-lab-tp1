import { Component, OnInit } from '@angular/core';
import { InternalService } from '../../internal.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: any = []
  cart: any = []

  constructor(private readonly internalService: InternalService) { }

  ngOnInit(): void {
    this.internalService.getProducts().subscribe((res: any) => {
      this.products = res.rows;
    })
    this.cart = this.internalService.cart;
  }

  addCart(item: any, index: number) {
    console.log(item)
    if (this.cart.find((res: any) => item.description == res.description)) {
      this.cart.find((res: any) => item.description == res.description).quant++;
    }
    else {
      let newP = {
        description: item.description,
        price: item.price,
        quant: 1
      }
      this.cart.push(newP)
    }
    console.log(this.cart)
    this.internalService.setCart(this.cart)
  }

}
