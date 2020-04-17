import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetService} from '../../services/pet.service';
import {PetInfo} from '../../interfaces/PetInfo';
import {Observable} from 'rxjs';
import {Pet} from '../../interfaces/Pet';

@Component({
  selector: 'app-selected-container',
  template: `<app-selected-pet [selectedPet] = 'selectedPet$ | async'
                               [shortInfo] = 'shortInfo' ></app-selected-pet>`,
  styleUrls: ['./selected-pet.component.scss']
})
export class SelectedPetContainerComponent implements OnInit {
  private petId: string;
  shortInfo: Pet;
  selectedPet$: Observable<PetInfo>;
  constructor(private route: ActivatedRoute,
              private petService: PetService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(next => {
      this.petId = this.route.snapshot.paramMap.get('id');
      this.selectedPet$ = this.petService.getSelectedPetList(this.petId);
      this.selectedPet$.subscribe(pets => {
        this.shortInfo = this.petService.selectedPet(this.petId);
      });
    });
  }

}
