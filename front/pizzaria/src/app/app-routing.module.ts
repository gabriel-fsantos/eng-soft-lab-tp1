import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'external',
    loadChildren: () => import('./external/external.module').then(m => m.ExternalModule),
    pathMatch: 'prefix'
  },
  {
    path: 'internal',
    loadChildren: () => import('./internal/internal.module').then(m => m.InternalModule),
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: 'external',
    pathMatch: 'prefix'
  },
  {
    path: '',
    redirectTo: 'external',
    pathMatch: 'prefix'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
