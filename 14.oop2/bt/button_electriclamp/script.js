class SwitchButton {
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp() {
        this.lamp.status = this.status;
        this.lamp.updateLamp();
    }
    switchOn() {
        this.status = true;
        this.connectToLamp();
    }
    switchOff() {
        this.status = false;
        this.connectToLamp();
    }
}
class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    updateLamp() {
        if (this.status) {
            document.write("The lamp is on." + "<br>");
        } else {
            document.write("The lamp is off." + "<br>");
        }
    }
}
let lamp = new ElectricLamp(false);
let switchButton = new SwitchButton(false, lamp);
for (let i = 0; i < 10; i++) {
    switchButton.switchOn();
    switchButton.switchOff();
}