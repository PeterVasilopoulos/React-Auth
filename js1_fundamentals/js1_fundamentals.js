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
    createdAt: 1543945177623
};
//formatting:  Shift + Alt/Option + F

// const firstName = person.firstName;
// const lastName = person["lastName"]

const {firstName, lastName, email, password, updatedAt} = person;
// 1. const firstName, lastName, email, password
// 2. go into person object, search for the corresponding key and assign the value


console.log(firstName + " " + lastName)
console.log(updatedAt)

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal, ,fourthAnimal] = animals
// 1. const firstAnimal, secondAnimal...
// 2. go into animals array, search for the corresponding elements according to the array idx
const [, , thirdAnimal] = animals
console.log(firstAnimal , secondAnimal, fourthAnimal )
console.log(animals)


// ------------- spread/rest ------------
const personCopy = {...person, firstName: "Whatever"}

console.log(personCopy)
console.log(person)

const animalCopy = [...animals, "unicorn"]
console.log(animalCopy)
console.log(animals)


// ------------- arrow function ------------
function sayHello(name){ 
    console.log("Hello, "+ name);
}

const sayHello1 = function(name){
    console.log("hello, "+ name);
}

// ()=>{}
const sayHello2 = (name) =>{
    console.log("Hello, "+ name);
}

const sayHelloToAnonymous = () =>{
    console.log("Hello, stranger");
}

sayHello("Heidi");
sayHello2("Pepper");
sayHelloToAnonymous();
// ------------- ternary operator ------------
