import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatCardModule} from '@angular/material/card'; 
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
