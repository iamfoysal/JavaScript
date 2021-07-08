// alert("Now you are going to learn about Array ! ");
//array 1st way
var fast_array = [7]
fast_array[0] = " Mohammad";
fast_array[1] = " Foysal";
fast_array[2] = " soyad";
fast_array[3] =" Mohiful";
fast_array[4] = " Takdirul";
fast_array[5] = " Islam";
fast_array[6] =" Robiul";
fast_array[7] =" islam";

document.write( "<hr> -: Array 1st way :- <hr> ");
document.write("Array size : " + fast_array.length);
document.write("<br> Array All Data : " + fast_array)
document.write( "<br> Array 2 index data is : " + fast_array[2]);
document.write( "<br> Array 5 index data is : " + fast_array[5]);
// concatation:
var con = fast_array[0].concat(fast_array[1]);
document.write("<br>  concatation 0 or 1 no array index : "+con);
var con = fast_array[2].concat(fast_array[3]);
document.write("<br>  concatation 2 or 3 no array index : "+con);

var con = fast_array[4].concat(fast_array[5]);
document.write("<br>  concatation 4 or 5 no array index : "+con);

var con = fast_array[6].concat(fast_array[7]);
document.write("<br>  concatation 6 or 7 no array index : "+con);


// first way end with concatations
document.write( "<br> <hr> <br> <br> ");






//========================array 2nd way =========================//
// fast_array.push("mohamamd foysal");
 var  b_array = [" Mohammad", " Foysal", " anisul", " islam"]

 document.write( "<hr> -: Array 2nd way :- <hr> ");
 document.write("<br> Array size : " + b_array.length);
 document.write("<br> "+ b_array);
 document.write("<br> ");
 b_array.push(" Soyad mohiful islam");
 b_array.push(" takdirul islam sishir");
 b_array.push("Robiul islam Emon");
  document.write("added anather array data, index no 4,5,6 :- " + b_array);
 document.write("<br> Array size : " + b_array.length);

 b_array.pop();
 document.write("<hr> <br> last array removed used pop method and array  data :- <br> " + b_array + "<br> Now Array size : <br>" + b_array.length);



// array loop use

var numb= [10, 20, 30, 40, 50, 60];
    console.log(numb[0]);
    console.log(numb[1]);
    console.log(numb[2]);
    console.log(numb[3]);
    console.log(numb[4]);
    console.log(numb[5]);


    /// now same work use loop
    function array_loop() {
        document.write( "<hr> -: Array 3nd way useing loop :- <hr> ");
        var num= [10, 20, 30, 40, 50, 60];
        var i;
        for(i=0; i<=5; i++){
            console.log(num[i]);// output show consol panal
            document.write( "Array Data : " + num[i] + "<br>");  
        }
    }
    array_loop(); // funcation declaration 


    
    /// now same work use loop data input 
    var number =  new Array();
    var i;
    for (i=0 ; i<3; i++){
    number[i]= parseInt(prompt("Enter a number : "))
    document.write(number[i] + ",");    
    }
    var sum=0;
    for( i= 0; i<3;  i++){
        // number[i]= parseInt(prompt("Enter a number : "))
        console.log(number[i]); 
        sum= sum + number[i]; 
    }
    console.log("Result : " +sum);
    document.write("<b> <br> ");
    document.write("<b> Result Here : " + sum);