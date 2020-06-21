// var, if, while, else, concatenation practice
function beerOnTheWall() {
    var num = 99;
    var word = 'bottles';

    while (num > 0) {

        document.write(num + ' ' + word + ' of beer on the wall, <br>');
        document.write(num + ' ' + word + ' of beer,<br>');
        document.write('Take one down, pass it around,<br>');
        num--;
        if (num == 1) {
            word = 'bottle';
            document.write(num + ' ' + word + ' of beer on the wall. <br><br>');
        }
        else if (num == 0) {
            word = 'bottles'
            document.write('No more ' + word + ' of beer on the wall. :(');
        }
        else {
            document.write(num + ' ' + word + ' of beer on the wall. <br><br>');
        }
    }
}