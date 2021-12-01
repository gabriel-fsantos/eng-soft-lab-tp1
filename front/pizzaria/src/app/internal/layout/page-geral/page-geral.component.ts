import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternalService } from '../../internal.service';

@Component({
  selector: 'app-page-geral',
  templateUrl: './page-geral.component.html',
  styleUrls: ['./page-geral.component.scss']
})
export class PageGeralComponent implements OnInit {

  cart: any = [];

  constructor(private router: Router,
     private readonly internalService: InternalService) { }

  ngOnInit(): void {
    this.internalService.cartEvent.subscribe((res: any) => {
      console.log(res)
      this.cart = res;
    })
  }

  redirecToCart() {
    this.router.navigate(['internal/carrinho']);
  }

  redirecToUser() {
    this.router.navigate(['internal/usuario']);
  }

  redirecToHome() {
    this.router.navigate(['internal/home']);
  }

}
