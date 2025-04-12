let mary = new Mobile(false);
let john = new Mobile(true);
mary.setStatus(true);

function marySendJohn() {
    let draftMary = document.getElementById('mary').value;
    mary.writeMessage(draftMary);
    mary.sendMessage(john);
    document.getElementById('mary').value = '';
    document.getElementById('inboxJohn').innerText = john.inboxes.join(";");
}

function johnSendMary() {
    let draftJohn = document.getElementById('john').value;
    john.writeMessage(draftJohn);
    john.sendMessage(mary);
    document.getElementById('john').value = '';
    document.getElementById('inboxMary').innerText = mary.inboxes.join(";");
}
