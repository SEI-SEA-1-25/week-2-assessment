// // console.log("hello world")

// let color = 'yellow';

// let crimeFighters = {
//   turtles: ["Leonardo", "Raphael", "Michelangelo", "Donatello"],
//   rangers: {
//     red: "Jason",
//     black: "Zack",
//     yellow: "Trini",
//     blue: "Billy",
//     pink: "Kimberly",
//     green: "Tommy"
//   }
// };

/* console.log(crimeFighters.turtles[3])
console.log(crimeFighters.rangers.blue)
if (crimeFighters.rangers.red === 'Jason') crimeFighters.rangers.blue = 'Bob';
 */


/* let b = "cat";
let a = "dog";
a = b;
a === "duck" */

/* 
let stuff = [
    ['one', 2, false],
    {
      apples: 12,
      fn: function() { return this.apples; }    //stuff[1].fn()
    },
    false
  ]; */

 // let a = 2
 //console.log(stuff[a])

//  console.log(stuff[0][a])





// let turtles = ["Donatello", "Leonardo", "Michaelangelo", "Raphael" ]


// for (i = 0; i < turtles.length; i++) {
//     let pizza = " likes pizza"
//     return turtles[i] + pizza
// }



class Turtle {
    constructor(name, maskColor) {
            // Question 3 answer below
        this.name = name
        this.maskColor = maskColor


    }
    // add the sayName method below (Question 4)
    
    // You do not use definition for function since in constructor
    sayName() {
        console.log(`I am ${this.name}`);
    }
  
  
  
}

// Create a new Turtle object below (Question 5)

const leo = new Turtle('Leonardo', 'blue')
console.log(leo);
leo.sayName()

// let car = {make: 'Toyota', year: 2017, model: 'Prius'};

// let dog = car.model
// console.log(dog)

// cat = car['make']
// console.log(cat)

// let account = {
//     accountNo: '31415235',
//     balance: 1000000000,
//     print: function() {
//         dog = parseInt(account.accountNo) + account.balance
//         console.log(print)
//     }
// }
