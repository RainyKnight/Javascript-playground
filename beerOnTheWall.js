// var, if, while, else, concatenation practice
function beerOnTheWall() {
    var num = 99;
    var word = 'bottles';

    while (num > 0) {

        console.log(num + ' ' + word + ' of beer on the wall, ');
        console.log(num + ' ' + word + ' of beer,');
        console.log('Take one down, pass it around,');
        num--;

        // changes "bottles" to "bottle" when only refering to a single bottle
        if (num == 1) {
            word = 'bottle';
            console.log(num + ' ' + word + ' of beer on the wall. ');
        }

        // changes "bottle" back to "bottles" when refering to zero bottles 
        // because english is a strange language
        else if (num == 0) {
            word = 'bottles'
            console.log('No more ' + word + ' of beer on the wall. :(');
        }
        // the usual beer bottle song
        else {
            console.log(num + ' ' + word + ' of beer on the wall. ');
        }
    }
}