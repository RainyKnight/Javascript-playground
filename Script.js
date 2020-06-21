function thingAMaJig() {

    // print "clunk" for every time that's passed in
    function clunk(times) {
        var num = times;
        while (num > 0) {
            display("clunk");
            num--;
        }
    }
    
    function thingamajig(size) {
        var facky = 1;
        clunkCounter = 0;
        if (size == 0) {
            // calls the display function to post in console and increase clunkcounter
            display("clank");
        } else if (size == 1) {
            display("thunk");
        } else {
            while (size > 1) {
                // facky multiplies by itself exponentially
                facky = facky * size;
                size--;
            }
            clunk(facky);
        }
    }
    
    function display(output) {
        console.log(output);
        clunkCounter++;
    }
    // "clank"
    // 1
    var clunkCounter = 0;
    thingamajig(0);
    console.log(clunkCounter);
    
    // "thunk"
    // 1
    clunkCounter = 0;
    thingamajig(1);
    console.log(clunkCounter);
    
    // "clunk"
    // "clunk"
    // 2 * 1 = "2"
    clunkCounter = 0;
    thingamajig(2);
    console.log(clunkCounter);
    
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // 3 * 2 * 1 = "6"
    clunkCounter = 0;
    thingamajig(3);
    console.log(clunkCounter);
    
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // 4 * 3 * 2 * 1 = "24"
    clunkCounter = 0;
    thingamajig(4);
    console.log(clunkCounter);
    
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // "clunk"
    // 5 * 4 * 3 * 2 * 1 = "120"
    clunkCounter = 0;
    thingamajig(5);
    console.log(clunkCounter);
    
    
}
