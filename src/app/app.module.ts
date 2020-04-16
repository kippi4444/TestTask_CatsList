import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetCatalogComponent } from './components/pet-catalog/pet-catalog.component';
import { SelectedPetComponent } from './components/selected-pet/selected-pet.component';
import {PetCatalogContainerComponent} from './components/pet-catalog/pet-catalog.container';
import {HttpClientModule} from '@angular/common/http';
import {SelectedPetContainerComponent} from './components/selected-pet/selected-pet.container';

@NgModule({
  declarations: [
    AppComponent,
    PetCatalogComponent,
    PetCatalogContainerComponent,
    SelectedPetComponent,
    SelectedPetContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
