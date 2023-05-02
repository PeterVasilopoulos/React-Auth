// ------ callback functions -------

const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged ${price}`)
}

const returningItem = (person, price) => {
    console.log(`Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`)
}

const registerCounter = (person, price, fx) => {
    console.log("Welcome to the store");
    fx(person, price);
}

registerCounter("Heidi", 300, makingPurchase)
registerCounter("Pepper", 10, returningItem)


// ------ Object.freeze() -------
const shoppingList = Object.freeze([
    { id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true },
    { id: 5, item: "red gamer chair", price: 300, shops: ["amazon", "BestBuy"], required: false },
    { id: 9, item: "soup dumplings", price: 3.29, shops: ["Trader Joes"], required: true },
    { id: 2, item: "Air ticket to Japan", price: 800, shops: ["expedia"], required: false },
    { id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true }
])


// ------ .map & .filter -------
// --- .map() ---
// DEMO: return an array of prices
const priceArr2 = shoppingList.map((element, idx) => {
    return element.price;
})
console.log(priceArr2)

// using a traditional for-loop 
const priceArr = []
for (const element of shoppingList) {
    priceArr.push(element.price)
}
console.log(priceArr)


// TODO: return a list of item names

// --- .filter() ---
// DEMO: return a list of cheap items (cheap: price< 100)
const cheapItems2 = shoppingList.filter((element) => {
    return element.price < 100;
})
console.table(cheapItems2);


const cheapItems = [];
for (const element of shoppingList) {
    if (element.price < 100) {
        cheapItems.push(element);
    }
}
console.table(cheapItems);



// DEMO: return a list of cheap items with only the names
const cheapItemNames = shoppingList
    .filter((element) => element.price < 100)
    .map((element) => element.item);
console.log(cheapItemNames)
// TODO: given a deleteId, return a list of items without the item of that matching id

// TODO: given an array index, return a list of items without the item of that index 

// TODO: filter the items that can be bought in Trader Joes 
// HINT: .includes(keyword) returns a boolean 


// ------ The big Freeze (More built-in functions for object & array)  -------
// -- arr.push alternative 1 : concat (glue 2 arrays together) --
const campingList = Object.freeze([
    {id: 20, item: "RV", price: 50000, shops: ["Camping world", "Craigslist"], required: true},
    {id: 21, item: "tent", price: 500, shops: ["Craigslist"], required: true}
])

const shoppingListWithCamping = shoppingList.concat(campingList);
console.table(shoppingListWithCamping);

// -- arr.push alternative 2 : spread (create an array with ...arr) --
const newItem = {id: 11, item: "TV", price: 500, shops: ["BestBuy"], required: false};
const shoppingListWithTV = [ ...shoppingList , newItem ];
console.table(shoppingListWithTV);

// -- slice : return a portion of the array --
const slicedItems = shoppingList.slice(0, 3)
console.table(slicedItems)

// -- splice vs slice (splice: remove the element, slice: return a portion) --
const array=[1,2,3,4,5];
console.log(array.splice(1, 2)) // delete 2 elements from array[1]
console.log(array)

const array2=[1,2,3,4,5]
console.log(array2.slice(1,2)); // starting at 1, ends at 2
console.log(array2)

// -- Sorting --
console.log(cheapItemNames)
const sortedNames = [...cheapItemNames].sort();
console.log(sortedNames)

console.log(priceArr)
const sortedPrice = [...priceArr].sort((b, a)=>a-b);
console.log(sortedPrice)

const sortedList = [...shoppingList].sort((a, b)=> a.item > b.item? 1:-1);
console.table(sortedList);




