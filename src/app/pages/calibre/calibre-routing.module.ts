import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalibrePage } from './calibre.page';

const routes: Routes = [
  {
    path: '',
    component: CalibrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalibrePageRoutingModule {}
