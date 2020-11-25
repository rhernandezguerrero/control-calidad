import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfodefectoPageRoutingModule } from './infodefecto-routing.module';

import { InfodefectoPage } from './infodefecto.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfodefectoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfodefectoPage]
})
export class InfodefectoPageModule {}
