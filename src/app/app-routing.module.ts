import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsListItemComponent } from './components/cards-list-item/cards-list-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'plants', component: CardsListComponent },
  { path: 'plants/:id', component: CardsListItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
