import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InternalService } from '../../internal.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrinho-page',
  templateUrl: './carrinho-page.component.html',
  styleUrls: ['./carrinho-page.component.scss']
})
export class CarrinhoPageComponent implements OnInit {

  cart: any = [];

  constructor(private readonly internalService: InternalService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.cart = this.internalService.cart;
  }

  getSum(): Number {
    let sum = 0;
    for (let item of this.cart) {
      sum += item.price * item.quant;
    }
    return sum;
  }

  remove(index: number): void {
    this.cart.splice(index,1);
  }

  order() {
    let id = localStorage.getItem('id');
    let newP = {
      orders: [],
      userId: id
    };
    newP.orders = this.cart;
    this.internalService.saveOrder(newP).subscribe((res) => {
      console.log(res);
      this.toastr.success('Pedido realizado com Sucesso');
      this.router.navigate(['/internal/home']);
      this.internalService.setCart([]);
    });
  }

}
