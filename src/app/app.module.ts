import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssScopeComponent } from './components/css-scope/css-scope.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserNewComponent } from './pages/users/user-new/user-new.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssScopeComponent,
    NgClassComponent,
    HighlightDirective,
    CustomDirectiveComponent,
    NgSwitchComponent,
    HomeComponent,
    UsersComponent,
    UserNewComponent,
    UserEditComponent,
    UserDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
