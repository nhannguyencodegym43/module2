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
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale() {
        return this.gender === true;
    }
    eatApple(apple) {
        if (apple && !apple.isEmpty()) {
            apple.decrease();
            this.weight++;
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
let adam = new Human("Adam", true, 70);
let eva = new Human("Eva", false, 50);
adam.eatApple(redApple);
eva.eatApple(redApple);
document.write(adam.getWeight());
document.write("<br>");
document.write(eva.getWeight());
document.write("<br>");
document.write(redApple.getWeight());