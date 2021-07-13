

// object 
var naMe = "Mohammad foysal";
var age  = 200; 
var address = "feni";
var skill = "nai";

console.log(naMe);

// multi object used one variable
var fullAddress = {
     naMe :"Mohammad foysal",
     ages : 200,
     address : "feni",
     skill :"naifs"

}
console.log(fullAddress.address);

document.write("<br>  My data is "+ fullAddress.naMe);

document.write("<br><hr>  **Students Info** ");

// object use functions
// adding a constructor 
function Students(name, roll, age , Cgpa, language, year) {
     this.name = name;
     this.roll = roll;
     this.language = language;
     this.age = age;
     this.Cgpa = Cgpa;
     this.year = year;   
     
     this.print = function() {
          document.write("<hr>");
          document.write("<br> Name = "+ this.name);
          document.write("<br> Roll = "+this.roll);
          document.write("<br> Age = "+this.age);
          document.write("<br> Cgpa = "+ this.Cgpa.toFixed(2));
          document.write("<br> Age = "+ this.language);
          document.write("<br> Year = " + this.year);

          
     }
}

var Students1 = new Students("Mohammad Kawsar Alom Foysal", 940958,  21, 4.00, "Bangla, English, Hindi", 2021);
var Students2 = new Students("Sumaiya Tabassum", 940936,  21, 4.00, "Bangla, English, Hindi", 2021);
var Students3 = new Students("Soyad Mohiful islam", 940969,  21, 4.00, "Bangla, English, Hindi", 2021);
var Students4 = new Students("Israt Jahan Rothi", 940944,  21, 4.00, "Bangla, English, Hindi", 2021);
var Students5 = new Students("Takdirul Islam Sihir", 940935,  22, 4.00, "Bangla, English, Hindi", 2021);
var Students6 = new Students("Robiul islam", 940900, 25, 4.00, "Bangla, English, Hindi", 2021);

// document.write("<hr> <br> students 0  name = "+ Students0.name);
// document.write("<hr> <br> students 1  age = "+ Students1.age);
// document.write("<hr> <br> students 2  gpa = "+ Students2.gpa);
// document.write("<hr> <br> students 3  age = "+ Students3.language);
// document.write("<hr> <br> students 3  age = " + Students3.year);

Students1.print();
Students2.print();
Students3.print();
Students4.print();
Students5.print();
Students6.print();