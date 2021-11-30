import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'cadastro',
    component: CadastroPageComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
