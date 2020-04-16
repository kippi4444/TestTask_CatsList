import {Component, Input, OnInit} from '@angular/core';
import {PetInfo} from '../../interfaces/PetInfo';
import {Pet} from '../../interfaces/Pet';

@Component({
  selector: 'app-selected-pet',
  templateUrl: './selected-pet.component.html',
  styleUrls: ['./selected-pet.component.scss']
})
export class SelectedPetComponent implements OnInit {
  @Input() shortInfo: Pet;
  @Input() selectedPet: PetInfo;
  constructor() { }

  ngOnInit() {
  }

}
