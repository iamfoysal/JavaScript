// ES6 Class 
// class is a template creating object

// let person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     fullname: function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// };

// let person2 = {
//     firstName: "John",
//     lastName: "Bro",
//     age: 50,
//     eyeColor: "black",
//     fullname: function () {
//         console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.eyeColor}`);
//     }
// };

// console.log(person1)
// console.log(person2)

class Person { 
    constructor(Fname, Lname, Age) {
        this.firstName = Fname;
        this.lastName = Lname;
        this.age = Age;
    }
}

let person1 = new Person("Foysal", "Ahmed", 20);
let person2 = new Person("mohammad", "Kawsar", 22);
let person3 = new Person("Kawsar", "Alam", 25);

console.log(person1)
console.log(person2)
console.log(person3)