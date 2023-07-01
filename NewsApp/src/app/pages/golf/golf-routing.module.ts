import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GolfPage } from './golf.page';

const routes: Routes = [
  {
    path: '',
    component: GolfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GolfPageRoutingModule {}
