import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfodefectoPage } from './infodefecto.page';

const routes: Routes = [
  {
    path: '',
    component: InfodefectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfodefectoPageRoutingModule {}
