class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    checkBattery() {};
    setEnergy(energy) {
        this.energy = energy;
    };
    getEnergy() {
        return this.energy;
    };
    decreaseEnergy() {
        this.energy--;
    };
}