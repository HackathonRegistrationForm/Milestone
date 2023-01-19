import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { GranitesComponent } from './granites/granites.component';
import { HomeComponent } from './home/home.component';
import { LanguageComponent } from './language/language.component';
import { LoginComponent } from './login/login.component';
import { MobilenumberComponent } from './mobilenumber/mobilenumber.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'granite',component:GranitesComponent},
  {path:'login',component:LoginComponent},
  {path:'language',component:LanguageComponent},
  {path:'signup',component:SignupComponent},
  {path:'mobile',component:MobilenumberComponent},
  {path:'material',component:RawMaterialComponent},
  {path:'product',component:AddproductComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
