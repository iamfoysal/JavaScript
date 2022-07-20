var numberOfwon = 0;
var numberOflost = 0;


for (var index = 1; index <= 5; index++) {

    var guessNumber = parseInt(prompt("Enter a number form 1 to 5 :"));
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (guessNumber == randomNumber) {
        document.write("<br> You have Won ");
        numberOfwon++;
    } else {
        document.write(" <br> You have Lost. Random Number  was  " + randomNumber);
        numberOflost++;
    }


}

document.write("<hr> <br>Total Number Of  Won : " + numberOfwon);

document.write("<br> Total Number Of  lost : " + numberOflost);