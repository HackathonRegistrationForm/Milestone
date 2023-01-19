import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GranitesComponent } from './granites/granites.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LanguageComponent } from './language/language.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';

import { MatRadioModule } from '@angular/material/radio';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { MobilenumberComponent } from './mobilenumber/mobilenumber.component';
import { FormGroup } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    GranitesComponent,
    RegisterComponent,
    SignupComponent,
    LoginComponent,
    LanguageComponent,
    RawMaterialComponent,
    MobilenumberComponent,
    AddproductComponent,
    HomeComponent,
 
    
    
  
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    
   
    
    


    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
