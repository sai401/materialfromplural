import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import {  RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
  {path:'contactmanager',loadChildren:'./contactmanager/contactmanager.module#ContactmanagerModule'},
  {path:'**',redirectTo:'contactmanager'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
