import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Pet} from '../../interfaces/Pet';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';



@Component({
  selector: 'app-pet-catalog',
  templateUrl: './pet-catalog.component.html',
  styleUrls: ['./pet-catalog.component.scss']
})
export class PetCatalogComponent implements OnInit, OnChanges {
  @Input() allPets: Pet[] = [];
  deleted: Pet[] = [];
  searching = false;
  bufferPets: Pet[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.allPets) {
      this.bufferPets = [...this.allPets];
    }
  }

  search() {
    const input = fromEvent(document.querySelector('#searching'), 'input');
    input.pipe(
      debounceTime( 300),
      map(event => event.target.value),
      distinctUntilChanged(),
    )
      .subscribe(value => {
        this.searching = true;
        const reg = new RegExp('^' + value + '\\.*', 'i');
        this.allPets = this.bufferPets.filter(pet => pet.name.match(reg));
        if (!value) {
          this.searching = false;
          this.allPets = [...this.bufferPets];
        }
      });
  }

  delete(pet: Pet) {
    const del = this.bufferPets.splice(this.bufferPets.indexOf(pet), 1);
    this.allPets.splice(this.allPets.indexOf(pet), 1);
    del[0].date = Date.now();
    this.deleted = [...this.deleted, ...del];
  }

  return(deletedPet: Pet) {
    const getBack = this.deleted.splice(this.deleted.indexOf(deletedPet), 1);
    this.allPets.push(...getBack);
    this.bufferPets.push(...getBack);
  }
}
