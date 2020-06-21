// function scope practice local vs global
function sherlock() {
    // this is the REAL "global" balance of money in the scenerio
    var balance = 10500;
    var cameraOn = true;

    // the real balance was never actually stolen because the global variable 
    // is shadowed by a local parameter with the same name...
    // to fix this, they should have changed the parameter "balance" into literally anything else
    function steal(balance, amount) {
        cameraOn = false;

        console.log("Shadowed local balance BEFORE: $" + balance);
        if (amount < balance) {
            balance = balance - amount;
            console.log("Shadowed local balance AFTER: $" + balance);
        }
        return amount;
        // on top of that, functions stop after a return. So the camera never comes back on...
        cameraOn = true;
    }

    console.log("Global balance BEFORE: $" + balance);
    var amount = steal(balance, 1250);
    console.log("Global balance AFTER: $" + balance);

    alert("Criminal: you stole " + amount + "!");
    alert("Except they didn't really ;)");
}
// Of course none of these values are ACTUALLY global to this playground
// because I don't want them interacting with other js files I might add in the future.