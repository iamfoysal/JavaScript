// nested if else condations 

var data1 = prompt("First number: ");
var data2 = prompt("Second number: ");
var data3 = prompt("Third number: ");

data1 = parseInt(data1);
data2 = parseInt(data2);
data3 = parseInt(data3);

if (data1 >= data2) {
    if (data1 >= data3) {
        document.write(data1 + " is the largest number!!");
    } else {
        document.write(data3 + " is the largest number!!");
    }
} else {
    if (data2 >= data3) {
        document.write(data2 + " is the largest number!!")
    } else {
        document.write(data3 + " is the largest number!!")
    }
}