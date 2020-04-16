import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
import {PetList} from '../interfaces/PetList';
import {Pet} from '../interfaces/Pet';
import {PetInfo} from '../interfaces/PetInfo';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private petUrl = 'https://mrsoft.by/tz20/';
  private url = '/assets/mock/';
  allPets: Pet[];
  constructor(private http: HttpClient) { }

  getPetList() {
    return this.http.get<PetList>(this.url + 'list.json').pipe(
        map(value => {
          this.allPets = value.data;
          return value.data;
        })
    );
  }

  getSelectedPetList(link) {
    return this.http.get<PetInfo>(this.url + 'cats/' + link + '.json').pipe(map(value => value));
  }

  selectedPet(pet) {
      return this.allPets.find(pets => pets.id === +pet);
  }

}
