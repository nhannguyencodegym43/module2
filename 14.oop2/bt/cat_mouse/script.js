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
        return `${this.name} ate ${mouse.name}`;
        } else {
        return `${this.name} couldn't eat ${mouse.name}`;
        }
    }
}