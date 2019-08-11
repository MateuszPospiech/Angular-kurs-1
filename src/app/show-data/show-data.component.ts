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
  dog: Dog;

  showDog() {
    return 'Mój pies to ' + this.dog.name + ' i ma ' + this.dog.age + ' lat.';
  }
}

class Dog {
  constructor(public name: string, public age: number) {
  }


}