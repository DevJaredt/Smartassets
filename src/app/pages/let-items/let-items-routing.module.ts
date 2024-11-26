import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetItemsPage } from './let-items.page';

const routes: Routes = [
  {
    path: '',
    component: LetItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetItemsPageRoutingModule {}
