import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefectoPageRoutingModule } from './defecto-routing.module';

import { DefectoPage } from './defecto.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefectoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DefectoPage]
})
export class DefectoPageModule {}
