
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;


//Example 2


var expr = prompt("Enter Number 0 to 3: ");
expr = parseInt(expr);
switch (expr) {
  case 1:
    document.write('Oranges are $0.59 a pound.');
   break; 
  case 2:
    document.write('Mangoes and papayas are $20 a pound.');
    break;
  case 3:
    document.write('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    document.write(`Sorry, we are out of ${expr}.`);
}
