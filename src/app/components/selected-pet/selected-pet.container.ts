import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetService} from '../../services/pet.service';
import {PetInfo} from '../../interfaces/PetInfo';
import {Observable, Subscription} from 'rxjs';
import {Pet} from '../../interfaces/Pet';

@Component({
  selector: 'app-selected-container',
  template: `<app-selected-pet [selectedPet] = 'selectedPet$ | async'
                               [shortInfo] = 'shortInfo' ></app-selected-pet>`,
  styleUrls: ['./selected-pet.component.scss']
})
export class SelectedPetContainerComponent implements OnInit, OnDestroy {
  private petId: string;
  sub: Subscription;
  shortInfo: Pet;
  selectedPet$: Observable<PetInfo>;
  constructor(private route: ActivatedRoute,
              private petService: PetService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(next => {
      this.petId = this.route.snapshot.paramMap.get('id');
      this.selectedPet$ = this.petService.getSelectedPetList(this.petId);
      this.sub = this.selectedPet$.subscribe(pets => {
        this.shortInfo = this.petService.selectedPet(this.petId);
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
