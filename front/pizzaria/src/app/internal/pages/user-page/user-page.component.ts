import { Component, OnInit } from '@angular/core';
import { InternalService } from '../../internal.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  orders: any = []
  constructor(private readonly internalService: InternalService) { }

  ngOnInit(): void {
    let id: any = localStorage.getItem('id');
    this.internalService.getOrders(id).subscribe((res: any) => {
      console.log(res)
      this.orders = res.rows;
    })
  }

  getSum(arr:[any]): Number {
    let sum = 0;
    for (let item of arr) {
      sum += item.price * item.quant;
    }
    return sum;
  }


}
