// 1. import all dependencies  
const express = require("express");
const app = express();

// 2. configure express
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// 3. routes & controller logic (CRUD)
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


app.get("/api/testing", (req, res)=>{
    res.json({message: "Hello World"});
})

// get all
app.get("/api/users" , (req, res)=>{
    res.json(users) 
    //response.data : {users: [a, b, c ]}  response.data: [user1, user2, user3]
})

// get one // /api/users/3
app.get("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id;
    res.json(users[paramsId]);
} )

// create (GET/POST/PUT/DELETE/PATCH)
app.post("/api/users", (req, res)=>{
    const formData = req.body;
    users.push(formData);
    res.json(formData);
})

// update (get id from params, get formData from body, update array)
app.put("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id;
    const formData = req.body;
    users[paramsId] = formData;
    res.json(users[paramsId]);
})

// delete
app.delete("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id;
    users.splice(paramsId, 1);
    res.json({status : "ok"});
})


// 4. listen to the port
app.listen(8000, ()=>console.log(`Listening to the port: 8000`));