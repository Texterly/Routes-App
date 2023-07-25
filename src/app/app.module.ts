import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { Page1Component } from './core/components/page1/page1.component';
import { Page2Component } from './core/components/page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserServiceService } from './core/services/user-service.service';
import { LoginModule, SignInModule } from '@app/core';
import { MaterialModule } from './core/modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    SignInModule,
    MaterialModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
