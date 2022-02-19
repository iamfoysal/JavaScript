// for loop use
var f_loopS;
document.write(" <hr> <br>");
for (f_loopS=1; f_loopS<=5; f_loopS=f_loopS+1)
    {

        document.write(f_loopS +"<h1>This is for loop</h1> <hr>" );

    }
//1+3+5+7........100
for(var numBer=1; numBer <= 100; numBer=numBer+2)
{
    document.write("/"+numBer);
}
document.write(" <hr> <br>");

// 2+4+6+.....100
for(var numBer=2; numBer <= 100; numBer=numBer+2)
{
    document.write("/"+numBer);
}
document.write(" <hr> <br>");
//10, 9, 8, 7,....1

for(var numBer=10; numBer >= 1; numBer=numBer-1)
{
    document.write(numBer+ ",");
}

// 1+2+3+4+= all number sum
document.write(" <hr> <br>");
var first_Numebr, last_Number, sum=0, x;
first_Numebr = parseInt(prompt("Enter first Number : "));
last_Number = parseInt(prompt("Enter last Number : "));

for(x =first_Numebr; x <= last_Number; x = x+1){
    sum= sum + x;
}
document.write("your result is = " + sum);

document.write(" <hr> <br>");

// while loop
var i=1,j=1, sum=0;

while(i <= 10){
    document.write(""+i);
    i=i+1;
}


document.write(" <hr> <br>");
while(j <= 10){
    sum= sum+j;
    j=j+1;
}
document.write(sum);

