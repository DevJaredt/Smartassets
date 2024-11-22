import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssestsPageRoutingModule } from './assests-routing.module';

import { AssestsPage } from './assests.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssestsPageRoutingModule,
    SharedModule
  ],
  declarations: [AssestsPage]
})
export class AssestsPageModule {}
