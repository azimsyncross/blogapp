import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootLayoutComponent } from './layout/root-layout/root-layout.component';

const routes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      { 
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/homes/homes.module').then(m => m.HomesModule) 
      },
      { 
        path: 'blogs',
        loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) 
      },
      {
        path: 'not-found',
        loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
      },
      {
        path: '**',
        redirectTo: 'not-found'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
