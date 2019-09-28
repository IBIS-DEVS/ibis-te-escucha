import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StaffGuard } from './guard/staff.guard';

const routes: Routes = [

  {
    path: 'staff', loadChildren: './staff/staff.module#StaffPageModule',
    canActivate: [StaffGuard]
  },
  { path: 'staff-login', loadChildren: './staff-login/staff-login.module#StaffLoginPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#chatPageModule' },
  { path: '', loadChildren: './tutorial/tutorial.module#TutorialPageModule' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'new-testimonial', loadChildren: './new-testimonial/new-testimonial.module#NewTestimonialPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
