import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../models/Animals';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {

  @Input() animal: Animal = new Animal('', '', '', 0, true)

  feedAnimal() {
    this.animal.isFed = true
    console.log('Blir matad');
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
