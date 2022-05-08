import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookflightComponent } from './usercomponents/bookflight/bookflight.component';

const routes:Routes = [
  // {path: "login", component: LoginComponent},
  // {path: "welcome", component: WelcomeComponent}
];

@NgModule({
  declarations: [
    BookflightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
