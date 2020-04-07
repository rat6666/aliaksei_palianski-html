const Animal = function (name, age) {
  this.name = name;
  this.age = age;
};

Animal.prototype.sayHi = function () {
  console.log(`hi, im ${this.name}, im ${this.age} old.`);
};
Animal.prototype.sayName = function () {
  console.log(`hi, im ${this.name}.`);
};

const Rabbit = function (name, age, ears) {
  Animal.call(this, name, age);
  this.ears = ears;
};

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.hide = function () {
  console.log(`${this.name} hided, only ${this.ears} are visible`);
};

const bear = new Animal("bear", 25);
bear.sayHi();

const rabbit = new Rabbit("rabbit", 15, "ears");
rabbit.sayHi();
rabbit.hide();
rabbit.sayName();
