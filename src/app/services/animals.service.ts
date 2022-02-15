import { Injectable } from '@angular/core';
import { Animal } from '../models/Animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  moreAnimals: Animal[] = [
    new Animal('Säl', 'Mellan', 'Fisk', 29, true),
    new Animal('Val', 'Skitstor', 'Krill', 112, false),
    new Animal('Delfin', 'Medelstor', 'Fisk', 33, true)
  ]


 constructor() { }

 getAnimals(): Animal[] {
  return this.moreAnimals;
 }
  

}
