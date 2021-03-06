import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupPage } from './group.page';

import { GroupListComponent } from "../../components/group-list/group-list.component";

const routes: Routes = [
  {
    path: '',
    component: GroupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupPage,GroupListComponent]
})
export class GroupPageModule {}
