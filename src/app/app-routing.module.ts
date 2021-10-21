import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserNewComponent } from './pages/users/user-new/user-new.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'new-user',
        component: UserNewComponent
      },
      {
        path: 'edit-user/:idUser',
        component: UserEditComponent
      },
      {
        path: 'detail-user/:idUser',
        component: UserDetailComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'new-user'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
