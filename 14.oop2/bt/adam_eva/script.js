class Apple {
    constructor() {
        this.weight = 10;
    }
    decrease() {
        if (this.weight > 0) {
            this.weight--;
        }
    }
    isEmpty() {
        return this.weight === 0;
    }
    getWeight() {
        return this.weight;
    }
}
let redApple = new Apple();
let greenApple = new Apple();
class Human {
    constructor(name, gender, weight, apple) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.apple = apple;
    }
    isMale() {
        return this.gender === true;
    }
    eatApple(apple) {
        if (this.apple && !this.apple.isEmpty()) {
            this.apple.decrease();
            this.weight++;
            this.apple = apple;
        }
    }
    say(message) {
        alert(`${this.name} says: ${message}`);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}
let adam = new Human("Adam", true, 70, redApple);
let eva = new Human("Eva", false, 50, greenApple);