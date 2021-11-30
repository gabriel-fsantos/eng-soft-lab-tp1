import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRoutingModule } from './external-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    LoginPageComponent,
    CadastroPageComponent
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    SharedModule
  ]
})
export class ExternalModule { }
