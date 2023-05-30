import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
    {
    path: 'agendamento',
    component: LayoutComponent,
    loadChildren: () => import('./modules/agendamento/agendamento.module').then(m => m.AgendamentoModule)
  },
  {
    path: 'sobre',
    component: LayoutComponent,
    loadChildren: () => import('./modules/sobre/sobre.module').then(m => m.SobreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
