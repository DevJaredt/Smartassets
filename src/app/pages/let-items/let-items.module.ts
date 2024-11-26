import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LetItemsPageRoutingModule } from './let-items-routing.module';

import { LetItemsPage } from './let-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LetItemsPageRoutingModule
  ],
  declarations: [LetItemsPage]
})
export class LetItemsPageModule {}
