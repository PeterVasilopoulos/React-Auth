const destList = [
    {
        "_id": "645d214a7d1293f2ed0e7973",
        "location": "Spain",
        "rating": 10,        "season": "summer",
    },
    {
        "_id": "645d2437ba45b0bc10c2f340",
        "location": "Hokkaido",
        "rating": 10,
        "season": "spring",
    },
    {
        "_id": "6463fe3820a8f7adf92094f8",
        "location": "Test",
        "rating": 8,
        "season": "summer",
    },
    {
        "_id": "6463fe9c20a8f7adf9209502",
        "location": "ABC",
        "rating": 8,
        "season": "summer",
    }
]

const test = [...destList].sort((a,b)=>  a.rating- b.rating)
console.log(test);



