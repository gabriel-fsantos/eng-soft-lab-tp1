import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  readonly cartEvent = new EventEmitter();

  // Endpoints
  private readonly endpointProducts: string = 'products';
  private readonly endpointOrder: string = 'order';
  cart: any = [];

  constructor(private readonly httpService: HttpService) { }

  getProducts() {
    return this.httpService.genericGet(this.endpointProducts)
    .pipe(map(res => {
        return res;
    }));
  }

  saveOrder(data: any) {
    return this.httpService.genericPost(this.endpointOrder, data, null)
    .pipe(map(res => {
        return res;
    }));
  }

  getOrders(id: string) {
    let end = `${this.endpointOrder}?userId=${id}`
    return this.httpService.genericGet(end)
    .pipe(map(res => {
        return res;
    }));
  }

  addCart(event: any) {
    this.cartEvent.emit(this.cart);
  }

  setCart(event: any) {
    this.cart = event;
    this.cartEvent.emit(event);
  }

}
