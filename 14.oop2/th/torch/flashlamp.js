class FlashLamp {
    status; battery;

    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }
    checkFlashLamp() {};
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    light() {
        if (this.battery > 0 && this.status === true) {
            this.battery--;
            return "The light is on"
        } else {
            return "You need to charge and turn on"
        }
    };
    turnOn () {
        this.status = true;
    };
    turnOff () {
        this.status = false;
    };
}
let battery = new Battery(100);
battery.setEnergy(10);

let flashLamp = new FlashLamp(false, 100);
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn on<br/>")
flashLamp.turnOn();
document.write(flashLamp.light() + "<br>");
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
document.write(flashLamp.light() + "<br>");
