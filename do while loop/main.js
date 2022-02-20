// do while loop


// 
document.write(" <hr>Do while loop <br> <hr>");

var Do_it = 1;

do {
    document.write("   " + Do_it);
    Do_it++;

} while (Do_it <= 20);

document.write("<br> ternary Condation :- <br>");
// var numbeR = Number(prompt( "Enter a number: "));
// if (numbeR>0){
//     document.write("Positive : " + numbeR);
// }
// else{
//     document.write("Nagative : " + numbeR);
// }

// var numbeRS = numbeR>0 ? "positive": "nagative"
// document.write(numbeRS);


document.write("<br><hr> Funcation :-");



// FUNCATIONS /// 



function result(Do_it) {
    document.write(" <hr>Do while loop useed Fucnations  <hr>");

    do {
        document.write(" <br>  " + Do_it);
        Do_it++;

    } while (Do_it <= 20);
}
result(1);
result(2);
result(2 + 2);
result(10);
result(15);

function result_2(Do_1, Do_2) {
    document.write(" <hr> anather parameter used Fucnations  <hr>");
    var ResUlt;

    ResUlt = Do_1 + Do_2;
    document.write(" <br> Result (+) = " + ResUlt);
    document.getElementById("resUlt_js").innerHTML = ResUlt; // linkup with html p tag 
    console.log(" Result (+) = " + ResUlt);

    ResUlt = Do_1 - Do_2;
    document.write(" <br> Result (-) = " + ResUlt);
    console.log(" Result (-) = " + ResUlt);

    ResUlt = Do_1 * Do_2;
    document.write(" <br> Result (*) = " + ResUlt);

    console.log(" Result (*) = " + ResUlt);

    ResUlt = Do_1 / Do_2;
    document.write(" <br> Result (/) = " + ResUlt);

    console.log(" Result (/) = " + ResUlt);

    ResUlt = Do_1 % Do_2;
    document.write(" <br>  Result (%) = " + ResUlt + "<hr>");

    console.log(" Result (%) = " + ResUlt);
}
result_2(50, 52);
result_2(115, 80);
result_2(25, 8); // the last function add html linkup 


///Object 

const daTa = {
    book: "500",
    pen: "Linkpro",
    clock: "Smart Watch",
    life: "Broken"
};
document.getElementById("demo").innerHTML = "This is Object output : " + daTa.book; // this line output show --> Output page 4th no line 

document.write("This is object Result : " + daTa.clock); // this line output showing --> output page last line
document.write(" <br>This is object Result : " + daTa.book);
document.write(" <br>This is object Result : " + daTa.life);
document.write(" <br>This is object Result : " + daTa.pen);



///Event 