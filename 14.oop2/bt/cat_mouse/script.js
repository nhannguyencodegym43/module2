class Mouse {
  constructor(name, weight, speed, status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
  }
  speak() {
    return `${this.name} says chit chit`;
  }
}
class Cat {
  constructor(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
  }
  speak() {
    return `${this.name} says meow meow`;
  }
  catchMouse (mouse) {
    if (this.speed > mouse.speed) {
      return `${this.name} caught ${mouse.name}`;
    } else {
      return `${this.name} couldn't catch ${mouse.name}`;
    }
  }
    eatMouse(mouse) {
        if (mouse.status) {
            this.weight = this.weight + mouse.weight;
            mouse.weight = 0;
            mouse.status = false;
        }
    }
}
let cat = new Cat("Tom", 10, 20);
let mouse = new Mouse("Jerry", 5, 15, true);