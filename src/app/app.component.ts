import { Component, EventEmitter, Output } from '@angular/core';
import { Animal } from './models/Animals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ovning7';

  @Output() fed: EventEmitter<Animal> = new EventEmitter()

  feedingAnimal(animal: boolean) {

  }

  allAnimals: Animal[] = [
    new Animal('katt', 'liten', 'kött', 3, true),
    new Animal('Fågel', 'pytte', 'Insäkter', 1, true),
    new Animal('Gris', 'Mellan', 'Allt', 5, false),
    new Animal('Get', 'Mellan', 'Gräs', 17, true),
    new Animal('Tupp', 'Liten', 'Mask', 28, false)
  ]

}
