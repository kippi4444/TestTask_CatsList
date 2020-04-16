import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetCatalogContainerComponent} from './components/pet-catalog/pet-catalog.container';
import {SelectedPetContainerComponent} from './components/selected-pet/selected-pet.container';


const routes: Routes = [
  { path: 'main', component: PetCatalogContainerComponent, children: [
      { path: ':id', component: SelectedPetContainerComponent }
    ] },
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
