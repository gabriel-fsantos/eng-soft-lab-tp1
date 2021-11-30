import { UserPageComponent } from './pages/user-page/user-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGeralComponent } from './layout/page-geral/page-geral.component';
import { CarrinhoPageComponent } from './pages/carrinho-page/carrinho-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [{
  path: '',
  component: PageGeralComponent,
  children: [
    {
      path: 'home',
      component: HomePageComponent,
    },
    {
      path: 'carrinho',
      component: CarrinhoPageComponent,
    },
    {
      path: 'usuario',
      component: UserPageComponent,
    },
    {
      path: '**',
      redirectTo: 'home',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
