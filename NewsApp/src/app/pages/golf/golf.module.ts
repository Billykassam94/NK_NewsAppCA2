import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GolfPageRoutingModule } from './golf-routing.module';

import { GolfPage } from './golf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GolfPageRoutingModule
  ],
  declarations: [GolfPage]
})
export class GolfPageModule {}
