import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Endpoints
  private readonly endpointAuth: string = 'auth';

  constructor(private readonly  httpService: HttpService) { }

  login(email: string, password: string) {
    const auth = btoa(`${email}:${password}`);
    return this.httpService.genericPost(this.endpointAuth, null, {Authorization: 'Basic ' + auth})
    .pipe(map(res => {
        return res;
    }));
  }

}
