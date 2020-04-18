/* eslint-disable max-classes-per-file */
class Animal {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }

  sayHi() {
    console.log(`Hi im ${this.name} my type is ${this.type}`);
  }
}

class Bear extends Animal {
  constructor(options) {
    super(options);
    this.weight = options.weight;
  }

  sayHi() {
    super.sayHi();
    console.log(`My weigth is ${this.weight}`);
  }
}

const unknownAnimal = new Animal({ name: "John", type: "unknown" });
unknownAnimal.sayHi();
const bear = new Bear({ name: "Misha", type: "bear", weight: "500kg" });
bear.sayHi();
