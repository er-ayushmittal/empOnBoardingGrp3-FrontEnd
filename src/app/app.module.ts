import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralNominationsComponent } from './general-nominations/general-nominations.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Screen4Component } from './screen4/screen4.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
  {path:"screen4",component:Screen4Component},
  {path:"",component:GeneralNominationsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GeneralNominationsComponent,
    Screen4Component,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
