// intro to Javascript -- web vs node, ECMA

// https://www.w3schools.com/js/js_versions.asp
// ------------- scope ------------
// global variable: myName (Heidi)
var myName = "Heidi"

function changeName() {
    // local variable: myName (Chen)
    var myName = "Pepper"
    myName = "Chen" // reassign myName --> search for local scope myName --> global
    console.log(myName)
}
changeName(); // Chen
console.log(myName) // global: Heidi
// ------------- Hoisting -------------
console.log(cat)
var cat = "Pepper"
console.log(cat)
// 1. create cat variable with undefine
// 2. line 18, assign "Pepper" into the cat variable

//  ------------- const & let ------------
// const : cannot be reassigned  | let: can be reassigned
const food = "taco"
let lunch = "sushi"
lunch = "burger"

for (let i = 0; i < 5; i++) {
    console.log(i)
}

const skills = ["breaking the code", "fixing the bugs", "bootstrap"]
skills.push("Picking a good music")
skills[0] = "something else"
console.log(skills)



// ------------- destructuring ------------
// Python: snake_case
// JS/Java/C#: variable -- camelCase
// JS/Java/C#: class -- PascalCase

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

//formatting:  Shift + Alt/Option + F

// const firstName = person.firstName;
// const lastName = person["lastName"]

const { password: hashedPassword, firstName, lastName, email, addresses: [firstAddress, secondAddress] } = person;
const [firstAddress2, secondAddress2] = person.addresses
// 1. const firstName, lastName, email, hashedPassword
// 2. go into person object, search for the corresponding key and assign the value

console.log(firstName + " " + lastName)

console.log(firstAddress)
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal, ...otherAnimals] = animals
// 1. const firstAnimal, secondAnimal...
// 2. go into animals array, search for the corresponding elements according to the array idx
const [, , thirdAnimal] = animals
console.log(firstAnimal, secondAnimal)
console.log(otherAnimals)

console.log(animals)


// ------------- spread/rest ------------
const personCopy = { ...person, firstName: "Whatever" }

// console.log(personCopy)
// console.log(person)

const animalCopy = [...animals, "unicorn"]
// console.log(animalCopy)
// console.log(animals)


// ------------- arrow function ------------
function sayHello(name) {
    console.log("Hello, " + name);
}

const sayHello1 = function (name) {
    console.log("hello, " + name);
}

// ()=>{}
const sayHello2 = (name) => {
    console.log("Hello, " + name);
}
// template literals
const sayHello3 = (name) => {
    console.log(`Hello, ${name}`);
}

const sayHelloToAnonymous = () => {
    console.log("Hello, stranger");
}

sayHello("Heidi");
sayHello2("Pepper");
sayHello3("Pepper")
sayHelloToAnonymous();

// function that return something
function changePrice(price, discount) {
    return price * discount;
}

// longhanded arrow function
const changePrice2 = (price, discount) => {
    return price * discount;
}

// shorthanded arrow function -- without {}, implicit return
const changePrice3 = (price, discount) => price * discount;
const changePrice4 = (price, discount) => (
    price * discount
)


console.log(changePrice(100, 0.9));
console.log(changePrice2(200, 0.9));
console.log(changePrice3(300, 0.9));
console.log(changePrice4(400, 0.9));

// ------------- ternary operator ------------
const rating = 5;

if (rating > 5) {
    console.log("This movie is good")
} else {
    console.log("This movie is not great")
}

// condition?true-statement: else-statement
rating > 5 ?
    console.log("This movie is good!!") :
    console.log("This movie is not great!!")

// rating >7 --> this is great , >5 --> this is good  else --> this is bad
rating > 7?
    console.log("This is great"):
    rating >5?
        console.log("This is good"):
        console.log("This is bad")


// short-circuit logic operator
rating>7 && console.log("This is a great movie")