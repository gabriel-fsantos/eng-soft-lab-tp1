import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  // Endpoints
  private readonly endpointAuth: string = 'users';
  private readonly endpointDistricts: string = 'districts';

  constructor(private readonly  httpService: HttpService) { }

  newUser(body: any) {
    return this.httpService.genericPost(this.endpointAuth, body, null)
    .pipe(res => {
      return res;
    });
  }

  getDistricts() {
    return this.httpService.genericGet(this.endpointDistricts)
    .pipe(res => {
      return res;
    })
  }
}
