const getMap = new Map([
    //  key,      Value 
    ["Book", 480],
    ["Pen", 500],
    ["Student", 650],
    ["Teacher", 40]
]);
console.log(getMap.get("Book"));
// set() method added value or get() method Accessing Map data 
getMap.set("Book", 150);
console.log(getMap.get("Book"));


const getMapInSet = new Map();
getMapInSet.set("Food", 5450);
getMapInSet.set("water", 350);
getMapInSet.set("Service", 840);
getMapInSet.set("Vat", 54);
getMapInSet.set("Discount", 80);
getMapInSet.set("Total", 5000);

console.log(getMapInSet.get("Food"));
console.log(getMapInSet.size); // return getMapInSet Maps size and show 3
getMapInSet.delete("Food"); // delete Food kyes and value  
console.log(getMapInSet.size); // now return getMapInSet Maps size and show 2
console.log(getMapInSet.has("T"));

//Iterate over getMapInSet Map: 
let loder = "";
for (const a of getMapInSet) {

    loder += a + "\n";
}
console.log(loder);