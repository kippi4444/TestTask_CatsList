import { Component, OnInit } from '@angular/core';
import {PetService} from '../../services/pet.service';
import {Pet} from '../../interfaces/Pet';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-pet-catalog-container',
  template: `<app-pet-catalog [allPets]='allPets$ | async' ></app-pet-catalog>`,
  styleUrls: ['./pet-catalog.component.scss']
})
export class PetCatalogContainerComponent implements OnInit {
  allPets$: Observable<Pet[]>;
  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getAllPets();
  }



  getAllPets() {
    this.allPets$ = this.petService.getPetList();
  }

}
