import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssestsPage } from './assests.page';

const routes: Routes = [
  {
    path: '',
    component: AssestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssestsPageRoutingModule {}
