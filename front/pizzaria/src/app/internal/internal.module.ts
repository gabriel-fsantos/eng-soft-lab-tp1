import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarrinhoPageComponent } from './pages/carrinho-page/carrinho-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PageGeralComponent } from './layout/page-geral/page-geral.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CarrinhoPageComponent,
    UserPageComponent,
    PageGeralComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    SharedModule
  ]
})
export class InternalModule { }
