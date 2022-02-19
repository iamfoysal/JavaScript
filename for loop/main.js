/* start javaScript (document.write) library*/ 
document.write("<br> Name: Mohammad Kawsar Alom Foysal <br> <hr>");
document.write("Address: Feni, Bangladesh<hr>");
document.write('Phone: +88964575452<br> <hr>');
/* start javaScript (alart) library*/ 
// alert("Wellcome!");
/* start javaScript (console.log) library*/ 
console.log('<br>This is Foysal <br>');




/*======================================================================*/ 
                   /* 2nd javaScript dataType*/
/*======================================================================*/ 

 /* (typeof) dataType*/

 typeof("i love JavaScript");  /*string type*/ 

//  variable
var firstMyName = "Mohammad Foysal <br>";
document.write(firstMyName);
firstMyName = " Mohammad Kawsar Alom Foysal";
document.write(firstMyName);


document.write("<br> name and age print: <br>")
    var myNamr, age;

    myName ="Robiul <br>";
    age = 21 ;
    document.write(myName);
    document.write(age);

//string concatenation
document.write("<hr>string concatenation*");
document.write("<br>Mohammad"+"foysal <br>");

/*OR */ 
var firstName ="Mohammad";
var lastName ="Foysal <br><hr>";

var fullName = firstName + lastName;
document.write(fullName ); 

// Number of Character

 var text= "Bangladesh is a small country";
 var len = text.length;
 document.write("<br>Number Of Character = " + len);
// input type Number of Characte
/*document.write("<br> input type Number Of Character " );
 var yourText=prompt("Enter Your Input :");
 document.write("<br>Number Of Character = " + yourText.length);*/
// convert uppercase 
document.write("<br><hr>  convert uppercase and lowercase > (bangladesh is a beautiful) = " );
var uperText =" bangladesh is a beautiful";
uperText = uperText.toUpperCase();
document.write(uperText)
// convert lowercase
document.write("<br><hr>  convert uppercase and lowercase > (BANGLADESH IS A BEAUTIFU) = " );
var lowerText = "BANGLADESH IS A BEAUTIFUL <br>";
 lowerText = lowerText.toLowerCase();
 document.write(lowerText);

//  concatenation used library
document.write(" <hr> concatenation used library inline = <br>");
document.write(uperText.concat(lowerText)); 

