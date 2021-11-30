import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private readonly loginService: LoginService, private readonly formBuilder: FormBuilder,
    private readonly router: Router) {
      this.loginForm = this.formBuilder.group({
        email: [null, [
          Validators.required,
          Validators.email
        ]],
        password: [null, [
          Validators.required,
          Validators.minLength(6)
        ]]
      });
  }

  ngOnInit() { }

  handleLogin() {
    // const dialog = this.dialog.open(ModalLoadingSecComponent, {
    //   disableClose: true,
    // });
    // this.loginService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
    //   .subscribe((user) => {

    //     // this.toastr.show('Autenticado com sucesso', 'Sucesso', { timeOut: 5000, messageClass: 'success' });
    //   }, (error: { status: number; }) => {
    //     let messageErr;
    //     if (error.status === 401) {
    //       messageErr = 'Usuário e/ou senha incorretos.';
    //     } else {
    //       messageErr = 'Algo de errado aconteceu, tente novamente mais tarde.';
    //     }
        // dialog.close();
        // this.toastr.show(messageErr, 'Erro', { timeOut: 5000, messageClass: 'error' });
      // });
  }

  getEmailErrorMessage(): string {
    return this.loginForm.get('email')?.hasError('required') ? 'Obrigatorio' :
           this.loginForm.get('email')?.hasError('email') ? 'Email invalido' : '';
  }

  getPasswordErrorMessage(): string {
    return this.loginForm.get('password')?.hasError('required') ? 'Obrigatorio' :
           !this.loginForm.get('password')?.hasError('minLength') ? 'Minimo 6 caracteres' : '';
  }

}
