import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootballPageRoutingModule } from './football-routing.module';

import { FootballPage } from './football.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootballPageRoutingModule
  ],
  declarations: [FootballPage]
})
export class FootballPageModule {}
