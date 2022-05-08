import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookflightComponent } from './usercomponents/bookflight/bookflight.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  // {path: "login", component: LoginComponent},
  // {path: "welcome", component: WelcomeComponent}
  {path: "bookflight", component: BookflightComponent}
];

@NgModule({
  declarations: [
    BookflightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
