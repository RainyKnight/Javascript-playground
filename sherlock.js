// function scope practice local vs global
function sherlock() {
    // this is the REAL "global" balance of money in the scenerio
    var balance = 10500;
    var cameraOn = true;

    // the real balance was never actually stolen because the global variable 
    // is shadowed by a local parameter with the same name...
    function steal(balance, amount) {
        cameraOn = false;

        console.log("Shadowed local balance BEFORE: $" + balance);
        if (amount < balance) {
            balance = balance - amount;
            console.log("Shadowed local balance AFTER: $" + balance);
        }
        return amount;
        cameraOn = true;
    }

    console.log("Global balance BEFORE: $" + balance);
    var amount = steal(balance, 1250);
    console.log("Global balance AFTER: $" + balance);

    alert("Criminal: you stole " + amount + "!");
    alert("Except they didn't really ;)");
}
// Of course none of these values are ACTUALLY global to this playground, 
// because I don't want them messing up any future additions!