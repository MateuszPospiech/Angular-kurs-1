import { Component } from '@angular/core';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {

  title = 'Angular';
  pi = Math.PI;
  date = new Date();

  // dog = new Dog('Reksio', 4);
  // dog: Dog;

  dogs = new Array<Dog>();

  constructor() {
    this.dogs.push(new Dog('Reksio', 4), new Dog('Ciapek', 3), new Dog('Azor',2));
  }

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  // showDog() {
  //   return 'Mój pies to ' + this.dog.name + ' i ma ' + this.dog.age + ' lat.';
  // }

}

class Dog {
  constructor(public name: string, public age: number) {
  }

}
