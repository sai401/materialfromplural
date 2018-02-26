import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {UserService} from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:'',component:ContactmanagerAppComponent,children:
   [
     {path:'',component:MaincontentComponent},    
   ]
  },
  {path:'**',redirectTo:''}
];

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MaincontentComponent, SidenavComponent],
  providers: [UserService],
})
export class ContactmanagerModule { }
