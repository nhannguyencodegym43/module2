class Mobile {
    constructor(status) {
        this.status = status;
        this.battery = 100;
        this.draft = "";
        this.inboxes = [];
        this.sent = [];
    }
    setStatus(status) {
        this.status = status;
    }
    chargeBattery() {
        this.battery = 100;
    }
    writeMessage(message) {
        if (this.status) {
        if (this.battery <= 0) {
            return alert("You need to charge the phone");
        }
        this.draft = message;
        this.battery--;
        } else {
            alert("The phone is off");
        }
    }
    sendMessage(mobile) {
        if (this.status) {
            if (this.battery <= 0) {
                return alert("You need to charge the phone");
            }
            let draft = this.draft;
            mobile.inboxes.push(draft)
            this.sent.push(draft);
            this.draft = "";
        } else {
            alert("The phone is off");
        }
    }
}