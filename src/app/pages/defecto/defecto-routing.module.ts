import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefectoPage } from './defecto.page';

const routes: Routes = [
  {
    path: '',
    component: DefectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefectoPageRoutingModule {}
