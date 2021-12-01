import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.component.html',
  styleUrls: ['./cadastro-page.component.scss']
})
export class CadastroPageComponent implements OnInit {

  first: FormGroup;
  second: FormGroup;
  third: FormGroup;

  select: any = []

  constructor(private readonly cadastroService: CadastroService,
              private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              private toastr: ToastrService) {

      this.first = this.formBuilder.group({
        name: [null, [
          Validators.required
        ]],
        cpf: [null, [
          Validators.required
        ]],
        phoneNumber: [null, [
          Validators.required
        ]]
      });

      this.second = this.formBuilder.group({
        street: [null, [
          Validators.required
        ]],
        district: [null, [
          Validators.required
        ]],
        cep: [null, [
          Validators.required
        ]],
      });

      this.third = this.formBuilder.group({
        email: [null, [
          Validators.required,
          Validators.email
        ]],
        password: [null, [
          Validators.required,
          Validators.minLength(6)
        ]]
      })
  }

  ngOnInit() {
    this.cadastroService.getDistricts().subscribe((res: any) => {
      console.log(res)
      this.select = res.rows;
    });
  }

  handleCadastro() {

    let body = {
      email: this.third.get('email')?.value,
      password: this.third.get('password')?.value,
      name: this.first.get('name')?.value,
      phoneNumber: this.first.get('phoneNumber')?.value,
      cpf: this.first.get('cpf')?.value,
      district: this.second.get('district')?.value,
      street: this.second.get('street')?.value,
      cep: this.second.get('cep')?.value,
      role: "admin"
    }

    this.cadastroService.newUser(body).subscribe((res) => {
      this.toastr.success('Usuário criado com Sucesso');
      this.router.navigate(['external/login']);
    }, (error) => {
      this.toastr.error('Algo de errado aconteceu tente novamente mais tarde.');
    })

  }

  getEmailErrorMessage(): string {
    return this.third.get('email')?.hasError('required') ? 'Obrigatorio' :
           this.third.get('email')?.hasError('email') ? 'Email invalido' : '';
  }

  getPasswordErrorMessage(): string {
    return this.third.get('password')?.hasError('required') ? 'Obrigatorio' :
           !this.third.get('password')?.hasError('minLength') ? 'Minimo 6 caracteres' : '';
  }

}
