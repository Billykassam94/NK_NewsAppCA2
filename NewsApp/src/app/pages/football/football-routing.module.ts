import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballPage } from './football.page';

const routes: Routes = [
  {
    path: '',
    component: FootballPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballPageRoutingModule {}
