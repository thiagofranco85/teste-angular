import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PessoasComponent } from './pessoas/pessoas.component';  
import { PessoasService } from './pessoas/pessoas.service'; 
import { HttpModule } from '@angular/http';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PessoasComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ PessoasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
