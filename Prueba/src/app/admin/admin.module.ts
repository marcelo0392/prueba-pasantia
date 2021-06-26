import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CardsComponent } from './cards/cards.component';
import { RepositoriesComponent } from './repositories/repositories.component';


@NgModule({
  declarations: [
    AdminComponent,
    CardsComponent,
    RepositoriesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
