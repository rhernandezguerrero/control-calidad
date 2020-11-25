import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalibrePageRoutingModule } from './calibre-routing.module';

import { CalibrePage } from './calibre.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalibrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CalibrePage]
})
export class CalibrePageModule {}
