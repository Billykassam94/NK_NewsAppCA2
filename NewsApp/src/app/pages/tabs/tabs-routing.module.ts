import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'local',
          children: [
            {
              path: '',
              loadChildren: () => import('../local/local.module').then( m => m.LocalPageModule)
            },
          ]
        },   
        {
          path: 'football',
          loadChildren: () => import('../football/football.module').then( m => m.FootballPageModule)
        },
        {
          path: 'golf',
          loadChildren: () => import('../golf/golf.module').then( m => m.GolfPageModule)
        },
        {
          path: 'favourite',
          loadChildren: () => import('../favourite/favourite.module').then( m => m.FavouritePageModule)
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/local',
      pathMatch: 'full'
    }
  ]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
