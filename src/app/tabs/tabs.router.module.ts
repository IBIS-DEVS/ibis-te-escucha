import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'testimonials',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../testimonials/testimonials.module').then(m => m.TestimonialsPageModule)
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../chat/chat.module').then(m => m.chatPageModule)
          }
        ]
      },
      {
        path: 'informationChannels',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../informationChannels/informationChannels.module').then(m => m.informationChannelsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/testimonials',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/testimonials',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
